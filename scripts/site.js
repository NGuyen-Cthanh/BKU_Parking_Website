const storageKey = "bkuParkingProfile";
const navModeKey = "bkuParkingNavMode";
const loginActivityKey = "bkuParkingLoginActivity";
const selectedSpotStorageKey = "bkuParkingSelectedSpotKey";
const parkingGateStorageKey = "bkuParkingGateIndex";
const loginWindowDays = 30;
const sensorSourceName = "Sensors data.xlsx";
const sensorWorkbookPath = "./Sensors%20data.xlsx";
const sensorPollIntervalMs = 1000;
const billingSourceName = "Parking_info.xlsx";
const billingWorkbookPath = "./Parking_info.xlsx";
const billingPollIntervalMs = 1000;
const defaultProfile = {
  firstName: "Thanh",
  lastName: "Nguyen Kong Thenh",
  email: "thanh.nguyenkongthenh@hcmut.edu.vn",
  password: "123456789",
  zone: "Gate 3",
  initials: "TN",
  avatar: "./assets/images/thanh-avatar.svg"
};

const parkingMapState = {
  hasLiveWorkbook: false,
  pollId: null,
  renderedSignature: "",
  selectedSpotKey: "",
  currentGateIndex: 0,
  zones: [],
  zonesSignature: "",
  statusMessage: "",
  billingRows: [],
  popupSpotKey: ""
};
const billingPageState = {
  hasLiveWorkbook: false,
  pollId: null,
  renderedSignature: ""
};
const parkingGateLayouts = [
  { // Gate 1
    top: { zone: "F", rows: [10, 10, 10, 10], showNumbers: true },
    main: [
      { zone: "A", stacks: [13, 13] },
      { zone: "B", stacks: [13, 13] },
      { zone: "C", stacks: [13, 13] },
      { zone: "D", stacks: [13, 13] },
      { zone: "E", stacks: [13, 13] }
    ]
  },
  { // Gate 2
    main: [
      { zone: "A", stacks: [15, 15, 15, 15] }
    ]
  },
  { // Gate 3
    top: { zone: "F", rows: [6, 6, 6, 6], showNumbers: true },
    main: [
      { zone: "A", stacks: [13, 13] },
      { zone: "B", stacks: [13, 13] },
      { zone: "C", stacks: [13, 13] },
      { zone: "D", stacks: [13, 13] },
      { zone: "E", stacks: [10, 10] }
    ]
  }
];
const parkingGateConfigs = [
  {
    key: "gate-1",
    number: 1,
    image: "./assets/images/Map Gate 1.png",
    imageAlt: "Gate 1 route map"
  },
  {
    key: "gate-2",
    number: 2,
    image: "./assets/images/Map Gate 2.png",
    imageAlt: "Gate 2 route map"
  },
  {
    key: "gate-3",
    number: 3,
    image: "./assets/images/Map Gate 3.png",
    imageAlt: "Gate 3 route map"
  }
];

const fallbackSensorStatuses = {
  A: [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  B: [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  C: [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  D: [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  E: [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
  F: [
    0, 0, 1, 0, 0, 1, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 1, 0, 0, 1, 0,
    0, 1, 0, 1, 0, 0, 1, 0, 0, 1,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 1
  ]
};

const fallbackBillingRows = [
  { date: "18.04.2026", checkIn: "7:00 am", checkOut: "12:00 pm", fee: 2000, durationMinutes: 300, slot: "A01", number: "36F-888.88" },
  { date: "17.04.2026", checkIn: "8:00 am", checkOut: "1:00 pm", fee: 2000, durationMinutes: 300, slot: "B08", number: "36F-888.88" },
  { date: "16.04.2026", checkIn: "12:00 pm", checkOut: "6:02 pm", fee: 3000, durationMinutes: 362, slot: "C12", number: "36F-888.88" },
  { date: "15.04.2026", checkIn: "10:00 am", checkOut: "12:00 pm", fee: 2000, durationMinutes: 120, slot: "D23", number: "36F-888.88" },
  { date: "14.04.2026", checkIn: "12:00 am", checkOut: "6:05 pm", fee: 3000, durationMinutes: 1085, slot: "E17", number: "36F-888.88" },
  { date: "13.04.2026", checkIn: "1:00 pm", checkOut: "7:18 pm", fee: 3000, durationMinutes: 378, slot: "F14", number: "36F-888.88" },
  { date: "12.04.2026", checkIn: "2:00 pm", checkOut: "4:32 pm", fee: 2000, durationMinutes: 152, slot: "C25", number: "36F-888.88" },
  { date: "11.04.2026", checkIn: "7:00 am", checkOut: "5:52 pm", fee: 2000, durationMinutes: 652, slot: "B18", number: "36F-888.88" },
  { date: "10.04.2026", checkIn: "7:00 am", checkOut: "6:00 pm", fee: 3000, durationMinutes: 660, slot: "E20", number: "36F-888.88" }
];

function t(key, values = {}) {
  if (window.bkuI18n && typeof window.bkuI18n.t === "function") {
    return window.bkuI18n.t(key, values);
  }

  return key;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "landing") {
    initParkingMap();
  }

  if (page === "login") {
    initLoginForm();
  }

  if (page === "settings-home") {
    initSettingsHome();
    initBillingPage();
  }

  if (page === "settings-bill") {
    initBillingPage();
  }
});

window.addEventListener("beforeunload", stopParkingMapPolling);
window.addEventListener("beforeunload", stopBillingPolling);

async function initParkingMap() {
  stopParkingMapPolling();
  parkingMapState.currentGateIndex = readSavedGateIndex();
  await refreshParkingMapData({ showLoading: true, initialLoad: true });
  parkingMapState.pollId = window.setInterval(() => {
    refreshParkingMapData({ silent: true }).catch(() => {});
  }, sensorPollIntervalMs);
}

function stopParkingMapPolling() {
  if (parkingMapState.pollId !== null) {
    window.clearInterval(parkingMapState.pollId);
    parkingMapState.pollId = null;
  }
}

async function refreshParkingMapData({ showLoading = false, silent = false, initialLoad = false } = {}) {
  const lowerContainer = document.querySelector("#parking-lower");
  const statusMessageNode = document.querySelector("#parking-status-message");

  if (!lowerContainer) {
    return;
  }

  if (showLoading && statusMessageNode) {
    statusMessageNode.textContent = t("landing.loadingParkingData", { source: sensorSourceName });
  }

  try {
    const [zoneData, billingData] = await Promise.all([
      loadParkingZonesFromWorkbook(),
      loadBillingInfoFromWorkbook().catch(() => null)
    ]);
    const workbookSelectedSpotKey = getLatestSelectedSpotKeyFromBillingRows(billingData?.rows || readFallbackBillingRows());
    const selection = resolvePreferredSelectedSpot(zoneData.zones, workbookSelectedSpotKey);
    const selectionMessage = billingData
      ? buildParkingSelectionMessage(selection.source, selection.spotKey)
      : t("landing.selectedSlotFallback");
    const statusMessage = t("landing.liveSyncStatus", {
      source: sensorSourceName,
      sheetName: zoneData.sheetName,
      selectionMessage,
      time: formatTime(new Date())
    });
    parkingMapState.billingRows = billingData?.rows || readFallbackBillingRows();
    if (initialLoad) {
      autoJumpToGateForSpot(selection.spotKey);
    }
    renderParkingMapView(
      zoneData.zones,
      zoneData.signature,
      statusMessage,
      selection.spotKey
    );
    parkingMapState.hasLiveWorkbook = true;
    return;
  } catch (error) {
    const fallbackZones = readFallbackParkingZones();
    const fallbackSignature = `fallback:${buildZonesSignature(fallbackZones)}`;
    const fallbackSelection = resolvePreferredSelectedSpot(fallbackZones, readFallbackSelectedSpotKey());
    const protocolHint = window.location.protocol === "file:"
      ? t("common.localServerRequired")
      : t("landing.parkingDataUnavailable", { source: sensorSourceName });

    if (!parkingMapState.hasLiveWorkbook && fallbackZones.length) {
      parkingMapState.billingRows = readFallbackBillingRows();
      if (initialLoad) {
        autoJumpToGateForSpot(fallbackSelection.spotKey);
      }
      renderParkingMapView(
        fallbackZones,
        fallbackSignature,
        t("landing.fallbackParkingData", { protocolHint }),
        fallbackSelection.spotKey
      );
      return;
    }

    if (statusMessageNode && !silent) {
      statusMessageNode.textContent = t("landing.waitingParkingRefresh", { protocolHint });
    } else if (statusMessageNode && silent) {
      statusMessageNode.textContent = t("landing.watchingParkingWorkbook", { source: sensorSourceName });
    }
  }
}

async function loadParkingZonesFromWorkbook() {
  if (window.location.protocol === "file:") {
    throw new Error("Workbook fetch is blocked on file:// pages.");
  }

  if (typeof window.XLSX === "undefined") {
    throw new Error("XLSX parser is not available.");
  }

  const response = await fetch(`${sensorWorkbookPath}?v=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Workbook request failed with status ${response.status}.`);
  }

  const workbookBuffer = await response.arrayBuffer();
  const workbook = window.XLSX.read(workbookBuffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error("Workbook does not contain any worksheet.");
  }

  const zones = parseParkingZonesFromWorksheet(workbook.Sheets[sheetName]);
  if (!zones.length) {
    throw new Error("Workbook does not contain valid zone data.");
  }

  return {
    sheetName,
    zones,
    signature: `live:${buildZonesSignature(zones)}`
  };
}

function parseParkingZonesFromWorksheet(worksheet) {
  const rows = window.XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    raw: true,
    blankrows: false
  });
  const maxColumns = rows.reduce((max, row) => Math.max(max, Array.isArray(row) ? row.length : 0), 0);
  const zones = [];

  for (let columnIndex = 0; columnIndex < maxColumns; columnIndex += 3) {
    const zoneHeader = rows[0]?.[columnIndex];
    const zoneLabel = extractZoneLabel(zoneHeader);

    if (!zoneLabel) {
      continue;
    }
    const spots = [];

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
      const row = rows[rowIndex] || [];
      const sensorName = row[columnIndex + 1];
      const rawStatus = row[columnIndex + 2];
      const normalizedStatus = normalizeWorkbookStatus(rawStatus);

      if ((sensorName == null || sensorName === "") && normalizedStatus === null) {
        continue;
      }

      if (normalizedStatus === null) {
        continue;
      }

      spots.push({
        number: spots.length + 1,
        status: normalizedStatus
      });
    }

    if (spots.length) {
      zones.push({
        zone: zoneLabel,
        spots
      });
    }
  }

  return zones;
}

function extractSelectedSpotFromWorkbook(workbook) {
  let latestSelection = null;

  workbook.SheetNames.forEach((sheetName) => {
    const worksheet = workbook.Sheets[sheetName];
    const rows = window.XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      raw: false,
      blankrows: false,
      defval: ""
    });
    const sheetSelection = extractSelectedSpotFromRows(rows);

    if (!sheetSelection) {
      return;
    }

    if (!latestSelection || compareSelectionCandidates(sheetSelection, latestSelection) > 0) {
      latestSelection = sheetSelection;
    }
  });

  return latestSelection?.spotKey || "";
}

function extractSelectedSpotFromRows(rows) {
  let latestSelection = null;

  rows.forEach((row, headerRowIndex) => {
    const columnIndexes = findSelectionColumnIndexes(row);

    if (columnIndexes.slot === -1) {
      return;
    }

    rows.slice(headerRowIndex + 1).forEach((dataRow, relativeIndex) => {
      if (!Array.isArray(dataRow)) {
        return;
      }

      const slotValue = dataRow[columnIndexes.slot];
      const zoneValue = columnIndexes.zone === -1 ? "" : dataRow[columnIndexes.zone];
      const spotKey = parseSelectedSpotKey(slotValue, zoneValue);

      if (!spotKey) {
        return;
      }

      const dateValue = columnIndexes.date === -1 ? "" : dataRow[columnIndexes.date];
      const timeValue = columnIndexes.time === -1 ? "" : dataRow[columnIndexes.time];
      const timestamp = parseSelectionTimestamp(dateValue, timeValue);
      const candidate = {
        spotKey,
        timestamp,
        rowIndex: headerRowIndex + relativeIndex + 1
      };

      if (!latestSelection || compareSelectionCandidates(candidate, latestSelection) > 0) {
        latestSelection = candidate;
      }
    });
  });

  return latestSelection;
}

function findSelectionColumnIndexes(row) {
  const indexes = {
    slot: -1,
    zone: -1,
    date: -1,
    time: -1
  };

  if (!Array.isArray(row)) {
    return indexes;
  }

  row.forEach((cell, index) => {
    const header = normalizeHeaderValue(cell);

    if (!header) {
      return;
    }

    if (indexes.slot === -1 && (header === "slot" || header.includes("selected slot"))) {
      indexes.slot = index;
      return;
    }

    if (indexes.zone === -1 && (header === "zone" || header.includes("zone"))) {
      indexes.zone = index;
      return;
    }

    if (indexes.date === -1 && (
      header === "date" ||
      header === "datetime" ||
      header === "timestamp" ||
      header.includes("date")
    )) {
      indexes.date = index;
      return;
    }

    if (indexes.time === -1 && (header === "time" || header.includes("time"))) {
      indexes.time = index;
    }
  });

  return indexes;
}

function compareSelectionCandidates(left, right) {
  const leftTimestamp = Number.isFinite(left.timestamp) ? left.timestamp : Number.NEGATIVE_INFINITY;
  const rightTimestamp = Number.isFinite(right.timestamp) ? right.timestamp : Number.NEGATIVE_INFINITY;

  if (leftTimestamp !== rightTimestamp) {
    return leftTimestamp - rightTimestamp;
  }

  return (left.rowIndex || 0) - (right.rowIndex || 0);
}

function getLatestSelectedSpotKeyFromBillingRows(rows) {
  const latestRow = rows.reduce((latestCandidate, row, index) => {
    const spotKey = parseSelectedSpotKey(row?.slot || "");
    if (!spotKey) {
      return latestCandidate;
    }

    const candidate = {
      spotKey,
      timestamp: parseSelectionTimestamp(row?.date, row?.checkIn || row?.checkOut),
      rowIndex: index + 1
    };

    if (!latestCandidate || compareSelectionCandidates(candidate, latestCandidate) > 0) {
      return candidate;
    }

    return latestCandidate;
  }, null);

  return latestRow?.spotKey || "";
}

function readFallbackSelectedSpotKey() {
  return getLatestSelectedSpotKeyFromBillingRows(readFallbackBillingRows());
}

function parseSelectedSpotKey(slotValue, zoneValue = "") {
  const slotText = String(slotValue || "").trim();
  const zoneLabel = extractZoneLabel(zoneValue);

  if (!slotText) {
    return "";
  }

  const combinedMatch = slotText.match(/(?:zone\s*)?([A-F])\s*[-_:/ ]\s*(\d{1,2})/i)
    || slotText.match(/(?:zone\s*)?([A-F])(\d{1,2})/i);

  if (combinedMatch) {
    return getSpotKey(combinedMatch[1].toUpperCase(), Number(combinedMatch[2]));
  }

  const slotNumberMatch = slotText.match(/(\d{1,2})/);
  if (!slotNumberMatch || !zoneLabel) {
    return "";
  }

  return getSpotKey(zoneLabel, Number(slotNumberMatch[1]));
}

function parseSelectionTimestamp(dateValue, timeValue = "") {
  const dateTimestamp = parseDateLikeValue(dateValue);
  if (!Number.isFinite(dateTimestamp)) {
    return Number.NEGATIVE_INFINITY;
  }

  const timeInMinutes = extractTimeTotalMinutes(timeValue);
  if (timeInMinutes === null) {
    return dateTimestamp;
  }

  return dateTimestamp + (timeInMinutes * 60000);
}

function parseDateLikeValue(value) {
  if (value == null || value === "") {
    return Number.NEGATIVE_INFINITY;
  }

  if (typeof value === "number") {
    const parsed = parseExcelDateCode(value);
    if (parsed) {
      return new Date(parsed.y, parsed.m - 1, parsed.d, 0, 0, 0, 0).getTime();
    }
  }

  const text = String(value).trim();
  if (!text) {
    return Number.NEGATIVE_INFINITY;
  }

  const isoMatch = text.match(/^(\d{4})[\/.-](\d{1,2})[\/.-](\d{1,2})$/);
  if (isoMatch) {
    const [, rawYear, rawMonth, rawDay] = isoMatch;
    const year = Number(rawYear);
    const month = Number(rawMonth);
    const day = Number(rawDay);
    const parsedDate = new Date(year, month - 1, day, 0, 0, 0, 0);
    return parsedDate.getTime();
  }

  const dayFirstMatch = text.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})$/);
  if (dayFirstMatch) {
    const [, rawDay, rawMonth, rawYear] = dayFirstMatch;
    const day = Number(rawDay);
    const month = Number(rawMonth);
    const year = Number(rawYear.length === 2 ? `20${rawYear}` : rawYear);
    const parsedDate = new Date(year, month - 1, day, 0, 0, 0, 0);
    return parsedDate.getTime();
  }

  const directTimestamp = Date.parse(text);
  if (Number.isFinite(directTimestamp)) {
    return startOfDay(new Date(directTimestamp)).getTime();
  }

  return Number.NEGATIVE_INFINITY;
}

function normalizeHeaderValue(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function extractZoneLabel(value) {
  const text = String(value || "").trim();
  const match = text.match(/^zone\s*([A-F])$/i) || text.match(/^([A-F])$/i);
  return match ? match[1].toUpperCase() : "";
}

function normalizeWorkbookStatus(value) {
  const numericValue = Number(value);
  if (numericValue === 0) {
    return 0;
  }

  if (numericValue === 1) {
    return 1;
  }

  return null;
}

function readFallbackParkingZones() {
  return Object.entries(fallbackSensorStatuses)
    .map(([zone, statuses]) => buildZoneSnapshot(zone, statuses))
    .filter((zone) => zone.spots.length);
}

function resolvePreferredSelectedSpot(zones, workbookSelectedSpotKey = "") {
  return {
    spotKey: workbookSelectedSpotKey || "",
    source: workbookSelectedSpotKey ? "billing" : "none"
  };
}

function buildParkingSelectionMessage(selectionSource, selectedSpotKey = "") {
  if (selectionSource === "manual" && selectedSpotKey) {
    return t("landing.selectedSlotManual", { slot: formatSpotKeyLabel(selectedSpotKey) });
  }

  return t("landing.selectedSlotSynced", { source: billingSourceName });
}

function readSavedSelectedSpotKey() {
  return String(localStorage.getItem(selectedSpotStorageKey) || "").trim();
}

function readSavedGateIndex() {
  const savedIndex = Number(localStorage.getItem(parkingGateStorageKey));

  if (!Number.isInteger(savedIndex) || savedIndex < 0 || savedIndex >= parkingGateConfigs.length) {
    return 0;
  }

  return savedIndex;
}

function saveSelectedSpotKey(spotKey) {
  if (!spotKey) {
    clearSavedSelectedSpotKey();
    return;
  }

  localStorage.setItem(selectedSpotStorageKey, spotKey);
}

function clearSavedSelectedSpotKey() {
  localStorage.removeItem(selectedSpotStorageKey);
}

function saveGateIndex(index) {
  localStorage.setItem(parkingGateStorageKey, String(index));
}

function getCurrentGateConfig() {
  return parkingGateConfigs[parkingMapState.currentGateIndex] || parkingGateConfigs[0];
}

function updateParkingLotSummary(gateConfig) {
  const lotTitleNode = document.querySelector("#parking-lot-title");

  if (!lotTitleNode) {
    return;
  }

  lotTitleNode.textContent = getGateLotTitle(gateConfig.number);
}

function getGateLotTitle(gateNumber) {
  return window.bkuI18n?.getLanguage?.() === "vi"
    ? `Bãi xe cổng ${gateNumber}`
    : `Gate ${gateNumber} Parking`;
}

function isSpotAvailable(zones, spotKey) {
  return zones.some((zone) =>
    zone.spots.some((spot) => getSpotKey(zone.zone, spot.number) === spotKey && spot.status === 0)
  );
}

function formatSpotKeyLabel(spotKey) {
  const [zoneLabel, rawSpotNumber] = String(spotKey || "").split(":");
  const spotNumber = Number(rawSpotNumber);

  if (!zoneLabel || !Number.isFinite(spotNumber)) {
    return spotKey;
  }

  return `${zoneLabel}${formatSlotNumber(spotNumber)}`;
}

function renderParkingMapView(zones, zonesSignature, statusMessage, selectedSpotKey = "") {
  const lowerContainer = document.querySelector("#parking-lower");
  const statusMessageNode = document.querySelector("#parking-status-message");
  const gateConfig = getCurrentGateConfig();

  if (!lowerContainer) {
    return;
  }

  const renderedSignature = `${zonesSignature}|selected:${selectedSpotKey || "-"}|gate:${gateConfig.key}`;
  parkingMapState.zones = zones;
  parkingMapState.zonesSignature = zonesSignature;
  parkingMapState.statusMessage = statusMessage;
  parkingMapState.selectedSpotKey = selectedSpotKey || "";
  updateParkingLotSummary(gateConfig);

  if (parkingMapState.renderedSignature !== renderedSignature) {
    closeSpotPopup();
    lowerContainer.innerHTML = `
      <button class="map-arrow" type="button" data-direction="left" aria-label="Show previous gate">&#10094;</button>
      <div class="parking-columns">${createParkingMapMarkup(zones)}</div>
      <button class="map-arrow" type="button" data-direction="right" aria-label="Show next gate">&#10095;</button>
    `;

    const totalSpots = zones.reduce((sum, zone) => sum + zone.spots.length, 0);
    const availableSpots = zones.reduce(
      (sum, zone) => sum + zone.spots.filter((spot) => spot.status === 0).length,
      0
    );

    const availableCountNode = document.querySelector("#parking-available-count");
    const totalCountNode = document.querySelector("#parking-total-count");

    if (availableCountNode) {
      availableCountNode.textContent = formatSlotNumber(availableSpots);
    }

    if (totalCountNode) {
      totalCountNode.textContent = formatSlotNumber(totalSpots);
    }

    bindGateArrows(lowerContainer);
    bindParkingSpotButtons(lowerContainer);
    parkingMapState.renderedSignature = renderedSignature;
  }

  if (statusMessageNode) {
    statusMessageNode.textContent = statusMessage;
  }
}

function createParkingMapMarkup(zones) {
  const zoneLookup = new Map(zones.map((zone) => [normalizeZoneLabel(zone.zone), zone]));
  const gateConfig = getCurrentGateConfig();
  const layout = parkingGateLayouts[parkingMapState.currentGateIndex];
  
  const gateMapMarkup = createGateMapMarkup(gateConfig);
  const topMarkup = layout.top ? createTopZoneMarkup(zoneLookup, layout.top) : "";
  const mainMarkup = createMainParkingMarkup(zoneLookup, layout.main);

  const gateHeaderMarkup = `
    <div class="parking-gate-header" style="width: 100%; max-width: min(620px, 100%); margin: 0 auto 24px; text-align: left;">
      <h3 style="margin: 0 0 6px; font-size: 1.75rem; font-weight: 700; color: #1a1f26; letter-spacing: -0.02em;">${getGateLotTitle(gateConfig.number)}</h3>
      <p style="margin: 0; color: #5e6673; font-size: 0.95rem; font-weight: 600; display: flex; align-items: center; gap: 8px;">
        <span><strong id="parking-available-count">--</strong>/<strong id="parking-total-count">--</strong> <span id="parking-available-label">spots available</span></span>
      </p>
    </div>
  `;

  return `
    <div class="parking-map-stage">
      ${gateMapMarkup}
      ${gateHeaderMarkup}
      ${topMarkup}
      <div class="parking-main-layout">${mainMarkup}</div>
    </div>
  `;
}

function createGateMapMarkup(gateConfig) {
  return `
    <section class="parking-gate-map-block" aria-label="${gateConfig.imageAlt}">
      <img class="parking-gate-map" src="${gateConfig.image}" alt="${gateConfig.imageAlt}">
    </section>
  `;
}

function createMainParkingMarkup(zoneLookup, mainLayout) {
  return mainLayout
    .map((entry, index) => {
      const zone = getZoneForLayout(zoneLookup, entry.zone, sumCounts(entry.stacks));
      const zoneMarkup = `
        <section class="parking-main-zone" aria-label="Zone ${zone.zone}">
          <span class="parking-zone-tag">${zone.zone}</span>
          ${createVerticalZoneColumns(zone, entry.stacks)}
        </section>
      `;
      const dividerMarkup = index < mainLayout.length - 1
        ? '<div class="parking-lane-divider" aria-hidden="true"></div>'
        : "";

      return `${zoneMarkup}${dividerMarkup}`;
    })
    .join("");
}

function createTopZoneMarkup(zoneLookup, topConfig) {
  const topZone = getZoneForLayout(zoneLookup, topConfig.zone, sumCounts(topConfig.rows));
  let cursor = 0;

  const rowsMarkup = topConfig.rows
    .map((rowSize, rowIndex) => {
      const rowSpots = topZone.spots.slice(cursor, cursor + rowSize);
      cursor += rowSize;

      return `
        <div class="parking-top-row">
          ${rowSpots.map((spot) => createParkingButton(topZone.zone, spot, { showNumber: topConfig.showNumbers, compact: true })).join("")}
        </div>
      `;
    })
    .join("");

  return `
    <section class="parking-top-zone" aria-label="Zone ${topZone.zone}">
      <span class="parking-zone-tag">${topZone.zone}</span>
      <div class="parking-top-grid">${rowsMarkup}</div>
    </section>
  `;
}

function createVerticalZoneColumns(zone, stackSizes) {
  let cursor = 0;
  const stacksMarkup = stackSizes
    .map((stackSize) => {
      const stackSpots = zone.spots.slice(cursor, cursor + stackSize);
      cursor += stackSize;

      return `
        <div class="parking-zone-column">
          ${stackSpots.map((spot) => createParkingButton(zone.zone, spot)).join("")}
        </div>
      `;
    })
    .join("");

  return `<div class="parking-zone-columns">${stacksMarkup}</div>`;
}

function getZoneForLayout(zoneLookup, zoneLabel, requiredCount, blankNumbers = false) {
  const normalizedLabel = normalizeZoneLabel(zoneLabel);
  const sourceZone = zoneLookup.get(normalizedLabel);
  const spots = Array.from({ length: requiredCount }, (_, index) => {
    const liveSpot = sourceZone?.spots[index];
    if (liveSpot) {
      return liveSpot;
    }

    return {
      number: index + 1,
      status: 1,
      placeholder: true,
      blankNumber: blankNumbers
    };
  });

  return {
    zone: normalizedLabel,
    placeholder: !sourceZone,
    spots
  };
}

function sumCounts(values) {
  return values.reduce((sum, value) => sum + value, 0);
}

function normalizeZoneLabel(zoneLabel) {
  return String(zoneLabel || "").trim().replace(/^Zone\s*/i, "") || "?";
}

function buildZoneSnapshot(zoneLabel, rawSpots) {
  const normalizedSpots = Array.isArray(rawSpots)
    ? rawSpots
        .map((spot, index) => normalizeSpot(spot, index))
        .filter(Boolean)
    : [];

  return {
    zone: normalizeZoneLabel(zoneLabel),
    spots: normalizedSpots
  };
}

function normalizeSpot(spot, index) {
  if (typeof spot === "number") {
    return {
      number: index + 1,
      status: spot === 0 ? 0 : 1
    };
  }

  if (spot && typeof spot === "object") {
    const statusValue = Number(spot.status);
    const slotNumber = Number(spot.number);

    return {
      number: Number.isFinite(slotNumber) ? slotNumber : index + 1,
      status: statusValue === 0 ? 0 : 1
    };
  }

  return null;
}

function createParkingButton(zoneLabel, spot, { showNumber = true, compact = false } = {}) {
  const spotKey = getSpotKey(zoneLabel, spot.number);
  let isSelected = false;

  if (parkingMapState.selectedSpotKey === spotKey) {
    let expectedGateIndex = null;
    const billingRow = getBillingRowForSpot(spotKey);
    if (billingRow && billingRow.gate != null) {
      expectedGateIndex = Number(billingRow.gate) - 1;
    } else {
      expectedGateIndex = getGateIndexForSpotKey(spotKey);
    }

    if (expectedGateIndex === null || expectedGateIndex === parkingMapState.currentGateIndex) {
      isSelected = true;
    }
  }

  const isAvailable = spot.status === 0;
  const stateClass = isSelected ? "selected" : isAvailable ? "available" : "unavailable";
  const slotLabel = showNumber && !spot.blankNumber ? formatSlotNumber(spot.number) : "";
  const statusLabel = isSelected
    ? t("landing.aria.selected")
    : isAvailable
      ? t("landing.aria.available")
      : t("landing.aria.unavailable");
  const compactClassName = compact ? " parking-spot-compact" : "";
  const isDisabled = !isSelected && !isAvailable;

  return `
    <button
      class="parking-spot ${stateClass}${compactClassName}"
      type="button"
      data-zone="${zoneLabel}"
      data-spot-number="${spot.number}"
      data-status="${spot.status}"
      aria-label="Zone ${zoneLabel} spot ${spot.number} ${statusLabel}"
      aria-pressed="${isSelected ? "true" : "false"}"
      ${isDisabled ? "disabled" : ""}
    >
      ${slotLabel}
    </button>
  `;
}

function bindParkingSpotButtons(container) {
  container.querySelectorAll(".parking-spot:not(:disabled)").forEach((button) => {
    button.addEventListener("click", () => {
      const zoneLabel = button.dataset.zone || "";
      const spotNumber = Number(button.dataset.spotNumber);

      if (!zoneLabel || !Number.isFinite(spotNumber)) {
        return;
      }

      const clickedSpotKey = getSpotKey(zoneLabel, spotNumber);

      if (parkingMapState.popupSpotKey === clickedSpotKey) {
        closeSpotPopup();
      } else {
        openSpotPopup(zoneLabel, spotNumber);
      }
    });
  });
}

function bindGateArrows(container) {
  container.querySelectorAll(".map-arrow").forEach((arrow) => {
    arrow.addEventListener("click", () => {
      shiftParkingGate(arrow.dataset.direction === "left" ? -1 : 1);
    });
  });
}

function shiftParkingGate(step) {
  const totalGates = parkingGateConfigs.length;

  parkingMapState.currentGateIndex = (parkingMapState.currentGateIndex + step + totalGates) % totalGates;
  saveGateIndex(parkingMapState.currentGateIndex);
  closeSpotPopup();
  renderParkingMapView(
    parkingMapState.zones,
    parkingMapState.zonesSignature,
    parkingMapState.statusMessage,
    parkingMapState.selectedSpotKey
  );
}

// ── Gate auto-jump ────────────────────────────────────────────────────────────
// Each gate owns a set of zones. Gate 1 = A,B,C,D,E,F (default).
// If your layout changes per gate, adjust this map.
const gateZoneMap = {
  0: ["A", "B", "C", "D", "E", "F"], // Gate 1
  1: ["A"],                            // Gate 2 (single zone per your screenshots)
  2: ["A", "B", "C", "D", "E", "F"]  // Gate 3
};

function getGateIndexForSpotKey(spotKey) {
  if (!spotKey) return null;
  const zoneLabel = String(spotKey).split(":")[0].toUpperCase();
  for (const [gateIdx, zones] of Object.entries(gateZoneMap)) {
    if (zones.includes(zoneLabel)) {
      // prefer the gate whose layout actually shows this zone
      // fall back to gate 0 if ambiguous
      return Number(gateIdx);
    }
  }
  return null;
}

function autoJumpToGateForSpot(spotKey) {
  if (!spotKey) return;
  const billingRow = getBillingRowForSpot(spotKey);
  // If there's a gate field on the billing row, use it directly
  if (billingRow && billingRow.gate != null) {
    const idx = Number(billingRow.gate) - 1;
    if (idx >= 0 && idx < parkingGateConfigs.length) {
      parkingMapState.currentGateIndex = idx;
      saveGateIndex(idx);
      return;
    }
  }
  // Otherwise derive from zone label — Gate 2 only has zone A in the screenshots
  // so we default to Gate 1 for multi-zone spots
  // You can refine this map as your data grows
}

// ── Billing row lookup ────────────────────────────────────────────────────────
function getBillingRowForSpot(spotKey) {
  if (!spotKey || !parkingMapState.billingRows.length) return null;
  const [zone, num] = String(spotKey).split(":");
  const slotLabel = `${zone}${formatSlotNumber(Number(num))}`;
  
  const matchingRows = parkingMapState.billingRows
    .filter((r) => String(r.slot || "").trim().toUpperCase() === slotLabel.toUpperCase());

  if (matchingRows.length === 0) return null;

  return matchingRows.reduce((latest, current) => {
    const currentTimestamp = current.timestamp || parseSelectionTimestamp(current.date, current.checkIn);
    const latestTimestamp = latest ? (latest.timestamp || parseSelectionTimestamp(latest.date, latest.checkIn)) : Number.NEGATIVE_INFINITY;
    
    return currentTimestamp > latestTimestamp ? current : latest;
  }, null);
}

// ── Popup ─────────────────────────────────────────────────────────────────────
let popupDurationInterval = null;

function openSpotPopup(zoneLabel, spotNumber) {
  const spotKey = getSpotKey(zoneLabel, spotNumber);
  parkingMapState.popupSpotKey = spotKey;

  const row = getBillingRowForSpot(spotKey);
  const slotLabel = `${zoneLabel}${formatSlotNumber(spotNumber)}`;

  // Remove any existing popup
  closeSpotPopup();

  const popup = document.createElement("div");
  popup.className = "spot-popup";
  popup.id = "spot-popup";
  popup.setAttribute("role", "dialog");
  popup.setAttribute("aria-label", `Details for slot ${slotLabel}`);

  const plateText = row?.number || "—";
  const checkInText = row?.checkIn || "—";
  const studentId = "2353100"; // static from design; could come from profile

  popup.innerHTML = `
    <button class="spot-popup-close" type="button" aria-label="Close">&times;</button>
    <div class="spot-popup-title">#${slotLabel} - ${plateText}</div>
    <div class="spot-popup-student">Student ID: ${studentId}</div>
    <div class="spot-popup-grid">
      <div class="spot-popup-field">
        <span class="spot-popup-label">Check in</span>
        <strong class="spot-popup-value">${checkInText}</strong>
      </div>
      <div class="spot-popup-field">
        <span class="spot-popup-label">Duration</span>
        <strong class="spot-popup-value" id="popup-duration">—</strong>
      </div>
    </div>
  `;

  // Position popup near parking-lower
  const container = document.querySelector("#parking-lower");
  if (container) {
    container.style.position = "relative";
    container.appendChild(popup);
  } else {
    document.body.appendChild(popup);
  }

  popup.querySelector(".spot-popup-close").addEventListener("click", closeSpotPopup);

  // Start live duration ticker
  startDurationTicker(row);
}

function closeSpotPopup() {
  const existing = document.getElementById("spot-popup");
  if (existing) existing.remove();
  clearInterval(popupDurationInterval);
  popupDurationInterval = null;
  parkingMapState.popupSpotKey = "";
}

function startDurationTicker(row) {
  clearInterval(popupDurationInterval);

  function updateDuration() {
    const el = document.getElementById("popup-duration");
    if (!el) { clearInterval(popupDurationInterval); return; }

    let durationMs;
    const hasCheckOut = row && row.checkOut && row.checkOut !== "--";

    if (row && row.checkInMinutes != null) {
      const nowMs = Date.now();
      if (hasCheckOut) {
        durationMs = (row.durationMinutes || 0) * 60 * 1000;
      } else {
        const rowDateMs = parseDateLikeValue(row.date);
        let baseDateMs = Number.isFinite(rowDateMs) ? rowDateMs : new Date().setHours(0,0,0,0);
        const checkInMs = baseDateMs + row.checkInMinutes * 60 * 1000;
        durationMs = Math.max(0, nowMs - checkInMs);
      }
    } else {
      el.textContent = "—";
      return;
    }

    const totalSeconds = Math.floor(durationMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hasCheckOut) {
      el.textContent = `${hours}h ${String(minutes).padStart(2, "0")}m`;
    } else {
      el.textContent = `${hours}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
    }
  }

  updateDuration();
  if (!(row?.checkOut && row.checkOut !== "--")) {
    popupDurationInterval = setInterval(updateDuration, 1000);
  }
}

function formatSlotNumber(value) {
  return String(value).padStart(2, "0");
}

function buildZonesSignature(zones) {
  return JSON.stringify(
    zones.map((zone) => ({
      zone: zone.zone,
      statuses: zone.spots.map((spot) => spot.status)
    }))
  );
}

function getSpotKey(zoneLabel, spotNumber) {
  return `${zoneLabel}:${spotNumber}`;
}

function formatTime(date) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(date);
}

function initLoginForm() {
  const form = document.querySelector("#login-form");
  const togglePasswordButton = document.querySelector("#toggle-password");
  const passwordInput = form?.querySelector('input[name="password"]');
  const note = document.querySelector("#login-note");

  if (!form || !passwordInput || !togglePasswordButton || !note) {
    return;
  }

  togglePasswordButton.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    togglePasswordButton.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const email = String(formData.get("email") || "janedoe@hcmut.edu.vn").trim();
    const localPart = email.split("@")[0] || "jane";
    const firstName = capitalize(localPart.split(".")[0] || "jane");

    const profile = {
      firstName,
      lastName: "Doe",
      email,
      password: String(formData.get("password") || ""),
      zone: "Gate 3",
      initials: firstName.charAt(0).toUpperCase()
    };

    localStorage.setItem(storageKey, JSON.stringify(profile));
    sessionStorage.setItem(navModeKey, "authenticated");
    recordTodayLoginActivity();
    note.textContent = "Demo sign in successful. Redirecting to the parking map...";

    window.setTimeout(() => {
      window.location.href = "index.html";
    }, 800);
  });
}

function initSettingsHome() {
  const profile = readProfile();
  const loginStats = getLoginStats();
  fillProfileForm(profile);
  renderLoginStats(loginStats);
  syncSidebarAvatar(profile);
  bindProfileActions();
}

function fillProfileForm(profile) {
  const form = document.querySelector("#profile-form");
  const preview = document.querySelector("#avatar-preview");

  if (!form || !preview) {
    return;
  }

  form.firstName.value = profile.firstName;
  form.lastName.value = profile.lastName;
  form.email.value = profile.email;
  form.password.value = profile.password;
  form.zone.value = profile.zone;
  renderProfileAvatar(preview, profile.avatar, profile.initials || buildInitials(profile.firstName, profile.lastName));
}

function bindProfileActions() {
  const form = document.querySelector("#profile-form");
  const upload = document.querySelector("#avatar-upload");
  const removeButton = document.querySelector("#remove-photo");
  const dismissButton = document.querySelector("#dismiss-banner");
  const logoutButton = document.querySelector("#logout-button");
  const banner = document.querySelector("#save-banner");
  const preview = document.querySelector("#avatar-preview");
  const passwordToggle = document.querySelector("[data-toggle-profile-password]");
  const passwordInput = form?.querySelector('input[name="password"]');
  let pendingAvatar = readProfile().avatar || "";

  if (!form || !upload || !removeButton || !dismissButton || !logoutButton || !banner || !preview || !passwordToggle || !passwordInput) {
    return;
  }

  hideBanner(banner);

  passwordToggle.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  });

  form.addEventListener("input", () => {
    hideBanner(banner);
  });

  form.addEventListener("change", () => {
    hideBanner(banner);
  });

  upload.addEventListener("change", () => {
    const [file] = upload.files || [];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      pendingAvatar = String(reader.result);
      renderProfileAvatar(
        preview,
        pendingAvatar,
        buildInitials(form.firstName.value, form.lastName.value)
      );
      hideBanner(banner);
    });
    reader.readAsDataURL(file);
  });

  removeButton.addEventListener("click", () => {
    pendingAvatar = "";
    renderProfileAvatar(
      preview,
      pendingAvatar,
      buildInitials(form.firstName.value, form.lastName.value)
    );
    hideBanner(banner);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") || "Jane");
    const lastName = String(formData.get("lastName") || "Doe");
    const initials = buildInitials(firstName, lastName);
    const currentProfile = readProfile();
    const updatedProfile = {
      ...currentProfile,
      firstName,
      lastName,
      email: String(formData.get("email") || "janedoe@hcmut.edu.vn"),
      password: String(formData.get("password") || "12345678"),
      zone: String(formData.get("zone") || "Gate 3"),
      initials,
      avatar: pendingAvatar
    };
    const hasChanges = profileHasChanges(currentProfile, updatedProfile);

    if (!hasChanges) {
      hideBanner(banner);
      return;
    }

    localStorage.setItem(storageKey, JSON.stringify(updatedProfile));
    fillProfileForm(updatedProfile);
    syncSidebarAvatar(updatedProfile);
    showBanner(banner);
  });

  dismissButton.addEventListener("click", () => {
    hideBanner(banner);
  });

  logoutButton.addEventListener("click", () => {
    sessionStorage.removeItem(navModeKey);
    clearSavedSelectedSpotKey();
    window.location.href = "index.html";
  });
}

async function initBillingPage() {
  stopBillingPolling();
  await refreshBillingData({ showLoading: true });
  billingPageState.pollId = window.setInterval(() => {
    refreshBillingData({ silent: true }).catch(() => {});
  }, billingPollIntervalMs);
}

function stopBillingPolling() {
  if (billingPageState.pollId !== null) {
    window.clearInterval(billingPageState.pollId);
    billingPageState.pollId = null;
  }
}

async function refreshBillingData({ showLoading = false, silent = false } = {}) {
  const statusMessageNode = document.querySelector("#billing-status-message");

  if (showLoading && statusMessageNode) {
    statusMessageNode.textContent = t("billing.loadingData", { source: billingSourceName });
  }

  try {
    const liveData = await loadBillingInfoFromWorkbook();
    renderBillingView(liveData.rows, liveData.signature);
    billingPageState.hasLiveWorkbook = true;

    if (statusMessageNode) {
      statusMessageNode.textContent = t("billing.liveSyncStatus", {
        source: billingSourceName,
        sheetName: liveData.sheetName,
        time: formatTime(new Date())
      });
    }
    return;
  } catch (error) {
    const fallbackRows = readFallbackBillingRows();
    const fallbackSignature = `fallback:${buildBillingSignature(fallbackRows)}`;
    const protocolHint = window.location.protocol === "file:"
      ? t("common.localServerRequired")
      : t("billing.dataUnavailable", { source: billingSourceName });

    if (!billingPageState.hasLiveWorkbook && fallbackRows.length) {
      renderBillingView(fallbackRows, fallbackSignature);
      if (statusMessageNode) {
        statusMessageNode.textContent = t("billing.fallbackData", { protocolHint });
      }
      return;
    }

    if (statusMessageNode && !silent) {
      statusMessageNode.textContent = t("billing.waitingRefresh", { protocolHint });
    } else if (statusMessageNode && silent) {
      statusMessageNode.textContent = t("billing.watchingWorkbook", { source: billingSourceName });
    }
  }
}

async function loadBillingInfoFromWorkbook() {
  if (window.location.protocol === "file:") {
    throw new Error("Workbook fetch is blocked on file:// pages.");
  }

  if (typeof window.XLSX === "undefined") {
    throw new Error("XLSX parser is not available.");
  }

  const response = await fetch(`${billingWorkbookPath}?v=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Workbook request failed with status ${response.status}.`);
  }

  const workbookBuffer = await response.arrayBuffer();
  const workbook = window.XLSX.read(workbookBuffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error("Workbook does not contain any worksheet.");
  }

  const rows = parseBillingRowsFromWorksheet(workbook.Sheets[sheetName]);
  if (!rows.length) {
    throw new Error("Workbook does not contain valid billing data.");
  }

  return {
    sheetName,
    rows,
    signature: `live:${buildBillingSignature(rows)}`
  };
}

function parseBillingRowsFromWorksheet(worksheet) {
  const rows = window.XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    raw: false,
    blankrows: false
  });
  const startIndex = looksLikeBillingHeaderRow(rows[0]) ? 1 : 0;

  return rows
    .slice(startIndex)
    .map((row, index) => normalizeBillingWorkbookRow(row, index))
    .filter(Boolean);
}

function looksLikeBillingHeaderRow(row) {
  if (!Array.isArray(row)) {
    return false;
  }

  return row.some((cell) => {
    const value = String(cell || "").trim().toLowerCase();
    return value === "date" || value === "check in" || value === "check out" || value === "fee";
  });
}

function normalizeBillingWorkbookRow(row, index) {
  if (!Array.isArray(row)) {
    return null;
  }

  const rawDate = row[0];
  const rawCheckIn = row[1];
  const rawCheckOut = row[2];
  const rawFee = row[3];
  const rawSlot = row[4];
  
  let rawGate = null;
  let rawNumber = null;
  if (row.length >= 7) {
    rawGate = row[5];
    rawNumber = row[6];
  } else {
    rawNumber = row[5];
  }

  const fee = normalizeFeeValue(rawFee);
  const checkInMinutes = extractTimeTotalMinutes(rawCheckIn);
  const checkOutMinutes = extractTimeTotalMinutes(rawCheckOut);
  const formattedDate = formatWorkbookDateValue(rawDate);
  const formattedCheckIn = formatWorkbookTimeValue(rawCheckIn);
  const formattedCheckOut = formatWorkbookTimeValue(rawCheckOut);

  const isActiveSession = checkInMinutes !== null && checkOutMinutes === null;
  
  if (!isActiveSession && (fee === null || fee < 100)) {
    return null;
  }

  const normalizedRow = {
    date: formattedDate,
    checkIn: formattedCheckIn,
    checkOut: formattedCheckOut,
    rawCheckOut: rawCheckOut,
    fee: fee ?? 0,
    durationMinutes: computeDurationMinutes(checkInMinutes, checkOutMinutes),
    checkInMinutes,
    slot: String(rawSlot || "").trim(),
    gate: rawGate != null ? String(rawGate).trim() : null,
    number: String(rawNumber || "").trim(),
    timestamp: parseSelectionTimestamp(rawDate, rawCheckIn)
  };

  if (!normalizedRow.date && normalizedRow.checkIn === "--" && normalizedRow.checkOut === "--") {
    return null;
  }

  if (!normalizedRow.date) {
    normalizedRow.date = `Row ${index + 1}`;
  }

  return normalizedRow;
}

function normalizeFeeValue(value) {
  if (value == null || value === "") {
    return null;
  }

  const sanitizedValue = typeof value === "string"
    ? value.replace(/[^\d.-]/g, "")
    : value;
  const numericValue = Number(sanitizedValue);
  return Number.isFinite(numericValue) ? Math.round(numericValue) : null;
}

function readFallbackBillingRows() {
  return fallbackBillingRows.map((row) => ({ ...row }));
}

function renderBillingView(rows, signature) {
  const body = document.querySelector("#billing-table-body");
  renderBillingSummary(rows);

  if (!body) {
    billingPageState.renderedSignature = signature;
    return;
  }

  if (billingPageState.renderedSignature === signature) {
    return;
  }

  const profile = readProfile();
  syncSidebarAvatar(profile);

  const displayName = `${profile.firstName} ${profile.lastName}`.trim();
  body.innerHTML = rows
    .map((row) => `
      <tr>
        <td>
          <span class="table-user">
            <span class="table-user-avatar">${profile.initials || "J"}</span>
            <span>${displayName}</span>
          </span>
        </td>
        <td>${row.date}</td>
        <td>${row.checkIn}</td>
        <td>${row.checkOut}</td>
        <td>${formatVnd(row.fee)}</td>
      </tr>
    `)
    .join("");

  billingPageState.renderedSignature = signature;
}

function renderBillingSummary(rows) {
  const semesterTotalNode = document.querySelector("#billing-semester-total");
  const lastSemesterTotalNode = document.querySelector("#billing-last-semester-total");
  const activeTimeNode = document.querySelector("#billing-active-time");
  const totalFee = rows.reduce((sum, row) => sum + (Number(row.fee) || 0), 0);
  const activeCheckOutCount = rows.length;

  if (semesterTotalNode) {
    semesterTotalNode.textContent = formatVnd(totalFee);
  }

  if (lastSemesterTotalNode) {
    lastSemesterTotalNode.textContent = "148.000 VND";
  }

  if (activeTimeNode) {
    activeTimeNode.textContent = String(activeCheckOutCount);
  }
}

function buildBillingSignature(rows) {
  return JSON.stringify(
    rows.map((row) => [row.date, row.checkIn, row.checkOut, row.fee])
  );
}

function formatWorkbookDateValue(value) {
  if (value == null || value === "") {
    return "";
  }

  if (typeof value === "number") {
    const parsed = parseExcelDateCode(value);
    if (parsed) {
      return `${formatSlotNumber(parsed.d)}.${formatSlotNumber(parsed.m)}.${parsed.y}`;
    }
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    const match = trimmed.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})$/);
    if (match) {
      const [, firstPart, secondPart, rawYear] = match;
      const firstNumber = Number(firstPart);
      const secondNumber = Number(secondPart);
      const isMonthFirst = firstNumber <= 12 && secondNumber > 12;
      const day = String(isMonthFirst ? secondNumber : firstNumber);
      const month = String(isMonthFirst ? firstNumber : secondNumber);
      const year = rawYear.length === 2 ? `20${rawYear}` : rawYear;
      return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`;
    }

    const parsedDate = new Date(trimmed);
    if (!Number.isNaN(parsedDate.getTime())) {
      return `${formatSlotNumber(parsedDate.getDate())}.${formatSlotNumber(parsedDate.getMonth() + 1)}.${parsedDate.getFullYear()}`;
    }

    return trimmed;
  }

  return String(value);
}

function formatWorkbookTimeValue(value) {
  const totalMinutes = extractTimeTotalMinutes(value);
  if (totalMinutes === null) {
    return "--";
  }

  return formatMinutesAsTime(totalMinutes);
}

function extractTimeTotalMinutes(value) {
  if (value == null || value === "") {
    return null;
  }

  if (typeof value === "number") {
    const parsed = parseExcelDateCode(value);
    if (parsed) {
      return (parsed.H * 60) + parsed.M + (parsed.S >= 30 ? 1 : 0);
    }

    const numericMinutes = Math.round(value * 24 * 60);
    return Number.isFinite(numericMinutes) ? numericMinutes : null;
  }

  if (typeof value === "string") {
    const trimmed = value.trim().toLowerCase();
    const match = trimmed.match(/^(\d{1,2}):(\d{2})(?::\d{2})?(?:\s*([ap]m))?$/);
    if (!match) {
      return null;
    }

    let hours = Number(match[1]);
    const minutes = Number(match[2]);
    const meridiem = match[3];

    if (meridiem) {
      if (meridiem === "pm" && hours < 12) {
        hours += 12;
      }
      if (meridiem === "am" && hours === 12) {
        hours = 0;
      }
    }

    return (hours * 60) + minutes;
  }

  return null;
}

function computeDurationMinutes(startMinutes, endMinutes) {
  if (startMinutes === null || endMinutes === null) {
    return 0;
  }

  if (endMinutes >= startMinutes) {
    return endMinutes - startMinutes;
  }

  return (24 * 60) - startMinutes + endMinutes;
}

function formatMinutesAsTime(totalMinutes) {
  const normalizedMinutes = ((totalMinutes % (24 * 60)) + (24 * 60)) % (24 * 60);
  const hours24 = Math.floor(normalizedMinutes / 60);
  const minutes = normalizedMinutes % 60;
  const suffix = hours24 >= 12 ? "pm" : "am";
  const hours12 = hours24 % 12 || 12;

  return `${hours12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function parseExcelDateCode(value) {
  if (
    typeof window.XLSX !== "undefined" &&
    window.XLSX.SSF &&
    typeof window.XLSX.SSF.parse_date_code === "function"
  ) {
    return window.XLSX.SSF.parse_date_code(value);
  }

  return null;
}

function formatVnd(amount) {
  return `${new Intl.NumberFormat("vi-VN").format(Math.round(amount || 0))} VND`;
}

function readProfile() {
  const saved = localStorage.getItem(storageKey);

  if (!saved) {
    return defaultProfile;
  }

  try {
    return { ...defaultProfile, ...JSON.parse(saved) };
  } catch {
    return defaultProfile;
  }
}

function renderProfileAvatar(previewNode, avatar, initials) {
  if (!previewNode) {
    return;
  }

  if (avatar) {
    previewNode.innerHTML = `<img src="${avatar}" alt="Profile avatar">`;
    return;
  }

  previewNode.textContent = initials || "J";
}

function buildInitials(firstName, lastName) {
  return `${firstName?.charAt(0) || "J"}${lastName?.charAt(0) || ""}`.trim().slice(0, 2).toUpperCase();
}

function profileHasChanges(currentProfile, nextProfile) {
  return (
    (currentProfile.firstName || "") !== (nextProfile.firstName || "") ||
    (currentProfile.lastName || "") !== (nextProfile.lastName || "") ||
    (currentProfile.email || "") !== (nextProfile.email || "") ||
    (currentProfile.password || "") !== (nextProfile.password || "") ||
    (currentProfile.zone || "") !== (nextProfile.zone || "") ||
    (currentProfile.avatar || "") !== (nextProfile.avatar || "")
  );
}

function showBanner(banner) {
  banner.hidden = false;
}

function hideBanner(banner) {
  banner.hidden = true;
}

function renderLoginStats(stats) {
  const activeTimeValue = document.querySelector("#active-time-value");
  const loginStateValue = document.querySelector("#login-state-value");
  const loginStateGauge = document.querySelector("#login-state-gauge");

  if (activeTimeValue) {
    activeTimeValue.textContent = String(stats.activeDays);
  }

  if (loginStateValue) {
    loginStateValue.textContent = `${stats.percentage}%`;
  }

  if (loginStateGauge) {
    loginStateGauge.style.setProperty("--value", String(stats.percentage));
  }
}

function getLoginStats() {
  const activity = readLoginActivity();

  return {
    activeDays: activity.length,
    percentage: Math.round((activity.length / loginWindowDays) * 100)
  };
}

function readLoginActivity() {
  const saved = localStorage.getItem(loginActivityKey);
  if (!saved) {
    return [];
  }

  try {
    const parsed = JSON.parse(saved);
    const rawDays = Array.isArray(parsed) ? parsed : [];
    const normalizedDays = [...new Set(rawDays.filter((day) => typeof day === "string"))]
      .filter((day) => isWithinLoginWindow(day))
      .sort();

    if (normalizedDays.length !== rawDays.length) {
      localStorage.setItem(loginActivityKey, JSON.stringify(normalizedDays));
    }

    return normalizedDays;
  } catch {
    return [];
  }
}

function isWithinLoginWindow(dayKey) {
  const dayDate = parseDayKey(dayKey);
  const today = startOfDay(new Date());

  if (!dayDate) {
    return false;
  }

  const diffInDays = Math.floor((today.getTime() - dayDate.getTime()) / 86400000);
  return diffInDays >= 0 && diffInDays < loginWindowDays;
}

function parseDayKey(dayKey) {
  const [year, month, day] = dayKey.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day);
}

function recordTodayLoginActivity() {
  const todayKey = formatDayKey(new Date());
  const activity = readLoginActivity();

  if (activity.includes(todayKey)) {
    return;
  }

  activity.push(todayKey);
  activity.sort();
  localStorage.setItem(loginActivityKey, JSON.stringify(activity));
}

function formatDayKey(date) {
  return `${date.getFullYear()}-${formatSlotNumber(date.getMonth() + 1)}-${formatSlotNumber(date.getDate())}`;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function syncSidebarAvatar(profile) {
  document.querySelectorAll(".sidebar-avatar").forEach((node) => {
    if (profile.avatar) {
      node.innerHTML = `<img src="${profile.avatar}" alt="Avatar" style="width:42px;height:42px;min-width:42px;min-height:42px;max-width:42px;max-height:42px;object-fit:cover;border-radius:50%;display:block;aspect-ratio:1">`;
    } else {
      node.innerHTML = `<span>${profile.initials || "J"}</span>`;
    }
  });
}

function capitalize(value) {
  if (!value) {
    return value;
  }

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}