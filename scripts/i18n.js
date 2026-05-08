const languageStorageKey = "bkuParkingLanguage";

const translations = {
  en: {
    "language.current.en": "English (United States)",
    "language.current.vi": "Vietnamese (VN)",
    "language.option.en": "English (United States)",
    "language.option.vi": "Vietnamese (VN)",
    "language.ariaLabel": "Select site language",
    "title.landing": "BKU Parking - Park Smarter",
    "title.login": "BKU Parking - Login",
    "title.settingsHome": "BKU Parking | Settings",
    "title.settingsBill": "BKU Parking | Billing",
    "title.bkpay": "Scan QR Code - BKU Parking",
    "title.error": "404 Page Not Found - BKU Parking",
    "title.thankYou": "Thank You - BKU Parking",
    "common.brand": "BKU Parking",
    "common.nav.home": "Home",
    "common.nav.map": "Map",
    "common.nav.bkpay": "BKPay",
    "common.nav.login": "Login",
    "common.nav.signUp": "Sign Up",
    "common.help": "Help",
    "common.technician": "Technician",
    "common.contactUs": "Contact Us",
    "common.privacyPolicy": "Privacy Policy",
    "common.termsOfService": "Terms of Service",
    "common.emailLabel": "Email:",
    "common.telLabel": "Tel:",
    "common.homePage": "Home Page",
    "common.searchPlaceholder": "Search for...",
    "common.supportNotice": "If you do not have an account or forgot your password, please contact the Data and Information Technology Center, Building A5 - Room 107 for support.",
    "common.copyrightHtml": "Copyright &copy; 2026 TANBINHTAINANGTEAM<br>All rights reserved.",
    "common.localServerRequired": "Live Excel sync needs a local server. Open this project with VS Code Live Server or another local web server.",
    "landing.heroLine1": "Park smarter, not harder.",
    "landing.heroLine2": "See each zone live, count slots top-to-bottom, and choose a free spot faster.",
    "landing.mapTitle": "Landscape Map",
    "landing.mapDescription": "Please observe the real-time parking map to find a parking spot faster and see each zone numbered from top to bottom.",
    "landing.lotTitle": "Gate 1 Parking",
    "landing.spotsAvailable": "spots available",
    "landing.legend.zone": "Zone",
    "landing.legend.available": "Available (0)",
    "landing.legend.selected": "Selected",
    "landing.legend.unavailable": "Unavailable (1)",
    "landing.footerDescription": "Park smarter, save time on campus, and keep your parking status visible from one place.",
    "landing.footerCopyrightHtml": "Copyright 2026 TANBINHTAINANGTEAM<br>All rights reserved.",
    "landing.loadingParkingData": "Loading live Excel data from {source}...",
    "landing.liveSyncStatus": "Live sync active from {source} ({sheetName}). {selectionMessage} Last check {time}.",
    "landing.selectedSlotSynced": "Latest selected slot synced from {source}.",
    "landing.selectedSlotManual": "Selected slot {slot} on this device.",
    "landing.selectedSlotFallback": "Latest selected slot unavailable. Showing fallback selection.",
    "landing.parkingDataUnavailable": "Could not read {source} live yet.",
    "landing.fallbackParkingData": "{protocolHint} Showing fallback data until the workbook becomes reachable.",
    "landing.waitingParkingRefresh": "{protocolHint} Waiting to refresh after the next Excel save.",
    "landing.watchingParkingWorkbook": "Watching {source}. Waiting for a readable saved workbook...",
    "landing.aria.available": "available",
    "landing.aria.selected": "selected",
    "landing.aria.unavailable": "unavailable",
    "login.welcomeBack": "Welcome Back",
    "login.subtitle": "Please log in to continue",
    "login.emailAddress": "Email Address",
    "login.emailPlaceholder": "Enter your email",
    "login.password": "Password",
    "login.passwordPlaceholder": "Enter your password",
    "login.rememberMe": "Remember me",
    "login.logIn": "Log In",
    "login.incorrectCredentials": "Incorrect email or password.",
    "settings.title": "Settings",
    "settings.nav.home": "Home",
    "settings.nav.billing": "Billing",
    "settings.nav.bill": "Bill",
    "settings.nav.setting": "Setting",
    "settings.semesterFee": "This semester fee (until now)",
    "settings.lastSemesterFee": "Last semester bill fee",
    "settings.activeTime": "Active time",
    "settings.profilePhoto": "Profile Photo",
    "settings.uploadPhoto": "Upload Photo",
    "settings.remove": "Remove",
    "settings.imageRequirements": "Image requirements:",
    "settings.reqMin": "Min. 400 x 400px",
    "settings.reqMax": "Max. 2MB",
    "settings.reqFace": "Your face or company logo",
    "settings.loginState": "Login state",
    "settings.active": "Active",
    "settings.unactive": "Inactive",
    "settings.userDetails": "User Details",
    "settings.firstName": "First Name",
    "settings.lastName": "Last Name",
    "settings.emailAddress": "Email Address",
    "settings.password": "Password",
    "settings.parkingZone": "Parking Zone",
    "settings.firstNamePlaceholder": "First Name",
    "settings.lastNamePlaceholder": "Your Last Name",
    "settings.emailPlaceholder": "Your Email",
    "settings.passwordPlaceholder": "Your Password",
    "settings.saveProfile": "Save Profile",
    "settings.logout": "Log Out",
    "settings.successSaved": "Successfully Saved.",
    "settings.successSavedMessage": "Your profile settings have been saved.",
    "billing.tableTitle": "Name ↓",
    "billing.date": "Date",
    "billing.checkIn": "Check in",
    "billing.checkOut": "Check out",
    "billing.fee": "Fee",
    "billing.loadingData": "Loading billing data from {source}...",
    "billing.liveSyncStatus": "Live sync active from {source} ({sheetName}). Last check {time}.",
    "billing.dataUnavailable": "Could not read {source} live yet.",
    "billing.fallbackData": "{protocolHint} Showing fallback billing data until the workbook becomes reachable.",
    "billing.waitingRefresh": "{protocolHint} Waiting to refresh after the next Excel save.",
    "billing.watchingWorkbook": "Watching {source}. Waiting for a readable saved workbook...",
    "bkpay.scanTitle": "Scan the QR code",
    "bkpay.checkBill": "Check your bill",
    "error.pageNotFound": "Page Not Found",
    "thankYou.title": "Thank You",
    "thankYou.processing": "Your Order is Processing",
    "thankYou.description": "Your payment has been received. We are processing your order and will update your parking information shortly."
  },
  vi: {
    "language.current.en": "Tiếng Anh (Hoa Kỳ)",
    "language.current.vi": "Tiếng Việt (VN)",
    "language.option.en": "Tiếng Anh (Hoa Kỳ)",
    "language.option.vi": "Tiếng Việt (VN)",
    "language.ariaLabel": "Chọn ngôn ngữ trang web",
    "title.landing": "BKU Parking - Đỗ xe thông minh",
    "title.login": "BKU Parking - Đăng nhập",
    "title.settingsHome": "BKU Parking | Cài đặt",
    "title.settingsBill": "BKU Parking | Hóa đơn",
    "title.bkpay": "Quét mã QR - BKU Parking",
    "title.error": "404 Không tìm thấy trang - BKU Parking",
    "title.thankYou": "Cảm ơn - BKU Parking",
    "common.brand": "BKU Parking",
    "common.nav.home": "Trang chủ",
    "common.nav.map": "Bản đồ",
    "common.nav.bkpay": "BKPay",
    "common.nav.login": "Đăng nhập",
    "common.nav.signUp": "Đăng ký",
    "common.help": "Hỗ trợ",
    "common.technician": "Kỹ thuật viên",
    "common.contactUs": "Liên hệ",
    "common.privacyPolicy": "Chính sách bảo mật",
    "common.termsOfService": "Điều khoản dịch vụ",
    "common.emailLabel": "Email:",
    "common.telLabel": "Điện thoại:",
    "common.homePage": "Trang chủ",
    "common.searchPlaceholder": "Tìm kiếm...",
    "common.supportNotice": "Nếu bạn chưa có tài khoản hoặc quên mật khẩu, vui lòng liên hệ Trung tâm Dữ liệu và Công nghệ Thông tin, tòa A5 - phòng 107 để được hỗ trợ.",
    "common.copyrightHtml": "Bản quyền &copy; 2026 TANBINHTAINANGTEAM<br>Tất cả quyền được bảo lưu.",
    "common.localServerRequired": "Đồng bộ Excel trực tiếp cần chạy bằng máy chủ cục bộ. Hãy mở dự án bằng VS Code Live Server hoặc máy chủ web cục bộ khác.",
    "landing.heroLine1": "Đỗ xe thông minh hơn, đỡ mất thời gian hơn.",
    "landing.heroLine2": "Xem trực tiếp từng khu, đếm chỗ từ trên xuống, và chọn chỗ trống nhanh hơn.",
    "landing.mapTitle": "Bản đồ bãi xe",
    "landing.mapDescription": "Vui lòng theo dõi bản đồ bãi xe thời gian thực để tìm chỗ đậu nhanh hơn và xem số thứ tự của từng khu từ trên xuống dưới.",
    "landing.lotTitle": "Bãi xe cổng 1",
    "landing.spotsAvailable": "chỗ còn trống",
    "landing.legend.zone": "Khu",
    "landing.legend.available": "Còn trống (0)",
    "landing.legend.selected": "Đã chọn",
    "landing.legend.unavailable": "Không trống (1)",
    "landing.footerDescription": "Đỗ xe thông minh hơn, tiết kiệm thời gian trong khuôn viên và theo dõi trạng thái bãi xe ở một nơi.",
    "landing.footerCopyrightHtml": "Bản quyền 2026 TANBINHTAINANGTEAM<br>Tất cả quyền được bảo lưu.",
    "landing.loadingParkingData": "Đang tải dữ liệu Excel trực tiếp từ {source}...",
    "landing.liveSyncStatus": "Đồng bộ trực tiếp từ {source} ({sheetName}). {selectionMessage} Cập nhật lúc {time}.",
    "landing.selectedSlotSynced": "Ô đã chọn mới nhất được đồng bộ từ {source}.",
    "landing.selectedSlotManual": "Đã chọn ô {slot} trên thiết bị này.",
    "landing.selectedSlotFallback": "Không lấy được ô đã chọn mới nhất. Đang dùng dữ liệu dự phòng.",
    "landing.parkingDataUnavailable": "Chưa thể đọc dữ liệu trực tiếp từ {source}.",
    "landing.fallbackParkingData": "{protocolHint} Đang hiển thị dữ liệu dự phòng cho đến khi có thể truy cập workbook.",
    "landing.waitingParkingRefresh": "{protocolHint} Đang chờ làm mới sau lần lưu Excel tiếp theo.",
    "landing.watchingParkingWorkbook": "Đang theo dõi {source}. Chờ workbook được lưu ở trạng thái có thể đọc...",
    "landing.aria.available": "còn trống",
    "landing.aria.selected": "đã chọn",
    "landing.aria.unavailable": "không trống",
    "login.welcomeBack": "Chào mừng trở lại",
    "login.subtitle": "Vui lòng đăng nhập để tiếp tục",
    "login.emailAddress": "Địa chỉ email",
    "login.emailPlaceholder": "Nhập email của bạn",
    "login.password": "Mật khẩu",
    "login.passwordPlaceholder": "Nhập mật khẩu của bạn",
    "login.rememberMe": "Ghi nhớ tôi",
    "login.logIn": "Đăng nhập",
    "login.incorrectCredentials": "Email hoặc mật khẩu không đúng.",
    "settings.title": "Cài đặt",
    "settings.nav.home": "Trang chủ",
    "settings.nav.billing": "Thanh toán",
    "settings.nav.bill": "Hóa đơn",
    "settings.nav.setting": "Cài đặt",
    "settings.semesterFee": "Học phí học kỳ này (đến hiện tại)",
    "settings.lastSemesterFee": "Học phí học kỳ trước",
    "settings.activeTime": "Số lần hoạt động",
    "settings.profilePhoto": "Ảnh hồ sơ",
    "settings.uploadPhoto": "Tải ảnh lên",
    "settings.remove": "Xóa",
    "settings.imageRequirements": "Yêu cầu hình ảnh:",
    "settings.reqMin": "Tối thiểu 400 x 400px",
    "settings.reqMax": "Tối đa 2MB",
    "settings.reqFace": "Ảnh khuôn mặt hoặc logo công ty",
    "settings.loginState": "Trạng thái đăng nhập",
    "settings.active": "Hoạt động",
    "settings.unactive": "Không hoạt động",
    "settings.userDetails": "Thông tin người dùng",
    "settings.firstName": "Tên",
    "settings.lastName": "Họ",
    "settings.emailAddress": "Địa chỉ email",
    "settings.password": "Mật khẩu",
    "settings.parkingZone": "Khu đỗ xe",
    "settings.firstNamePlaceholder": "Tên",
    "settings.lastNamePlaceholder": "Họ của bạn",
    "settings.emailPlaceholder": "Email của bạn",
    "settings.passwordPlaceholder": "Mật khẩu của bạn",
    "settings.saveProfile": "Lưu hồ sơ",
    "settings.logout": "Đăng xuất",
    "settings.successSaved": "Lưu thành công.",
    "settings.successSavedMessage": "Thông tin hồ sơ của bạn đã được lưu.",
    "billing.tableTitle": "Tên ↓",
    "billing.date": "Ngày",
    "billing.checkIn": "Giờ vào",
    "billing.checkOut": "Giờ ra",
    "billing.fee": "Phí",
    "billing.loadingData": "Đang tải dữ liệu hóa đơn từ {source}...",
    "billing.liveSyncStatus": "Đồng bộ trực tiếp từ {source} ({sheetName}). Cập nhật lúc {time}.",
    "billing.dataUnavailable": "Chưa thể đọc dữ liệu trực tiếp từ {source}.",
    "billing.fallbackData": "{protocolHint} Đang hiển thị dữ liệu hóa đơn dự phòng cho đến khi có thể truy cập workbook.",
    "billing.waitingRefresh": "{protocolHint} Đang chờ làm mới sau lần lưu Excel tiếp theo.",
    "billing.watchingWorkbook": "Đang theo dõi {source}. Chờ workbook được lưu ở trạng thái có thể đọc...",
    "bkpay.scanTitle": "Quét mã QR",
    "bkpay.checkBill": "Kiểm tra hóa đơn",
    "error.pageNotFound": "Không tìm thấy trang",
    "thankYou.title": "Cảm ơn",
    "thankYou.processing": "Đơn hàng của bạn đang được xử lý",
    "thankYou.description": "Thanh toán của bạn đã được ghi nhận. Chúng tôi đang xử lý đơn hàng và sẽ cập nhật thông tin bãi xe của bạn trong thời gian ngắn."
  }
};

function getLanguage() {
  return localStorage.getItem(languageStorageKey) === "vi" ? "vi" : "en";
}

function t(key, values = {}) {
  const language = getLanguage();
  const template = translations[language]?.[key] ?? translations.en[key] ?? key;
  return String(template).replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ""));
}

function setText(node, key) {
  if (node) {
    node.textContent = t(key);
  }
}

function setHTML(node, key) {
  if (node) {
    node.innerHTML = t(key);
  }
}

function setPlaceholder(node, key) {
  if (node) {
    node.setAttribute("placeholder", t(key));
  }
}

function setInlineTrailingText(node, key) {
  if (!node) {
    return;
  }

  const textNodes = [...node.childNodes].filter((child) => child.nodeType === Node.TEXT_NODE);
  const nextText = ` ${t(key)}`;

  if (textNodes.length) {
    textNodes[textNodes.length - 1].textContent = nextText;
    return;
  }

  node.appendChild(document.createTextNode(nextText));
}

function getPageKey() {
  const pageFromDataset = document.body?.dataset?.page;
  if (pageFromDataset) {
    return pageFromDataset;
  }

  const fileName = window.location.pathname.split("/").pop().toLowerCase();
  const pageMap = {
    "index.html": "landing",
    "login.html": "login",
    "bkpay.html": "bkpay",
    "error.html": "error",
    "thank_you.html": "thank-you"
  };
  return pageMap[fileName] || "";
}

function ensureLanguageStyles() {
  if (document.querySelector("#bku-language-style")) {
    return;
  }

  const style = document.createElement("style");
  style.id = "bku-language-style";
  style.textContent = `
    .bku-language-host {
      display: inline-flex;
      align-items: center;
    }
    .bku-language-host.is-floating {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 999;
    }
    .bku-language-widget {
      position: relative;
      z-index: 20;
      display: inline-flex;
    }
    .bku-language-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 40px;
      padding: 8px 12px;
      border: 1px solid rgba(148, 163, 184, 0.28);
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.94);
      color: #334155;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
      cursor: pointer;
    }
    .bku-language-menu {
      position: absolute;
      right: 0;
      bottom: calc(100% + 8px);
      z-index: 21;
      min-width: 220px;
      padding: 8px;
      border: 1px solid rgba(148, 163, 184, 0.24);
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 14px 32px rgba(15, 23, 42, 0.18);
      display: none;
    }
    .bku-language-widget.is-open .bku-language-menu {
      display: block;
    }
    .bku-language-option {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      border-radius: 8px;
      background: transparent;
      color: #1f2937;
      font-size: 14px;
      text-align: left;
      cursor: pointer;
    }
    .bku-language-option:hover {
      background: #eff6ff;
    }
    .bku-language-option.is-active {
      background: #dbeafe;
      color: #1d4ed8;
      font-weight: 700;
    }
    .bku-language-host[data-language-layout="landing"] .bku-language-button {
      min-height: auto;
      padding: 0;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      color: inherit;
      font-size: inherit;
      font-weight: inherit;
    }
    .bku-language-host[data-language-layout="landing"] .bku-language-menu {
      left: 0;
      right: auto;
      bottom: calc(100% + 10px);
    }
    .bku-language-host[data-language-layout="login"] .bku-language-menu {
      top: calc(100% + 10px);
      right: 0;
      bottom: auto;
    }
    /* Settings sidebar: stick translator to bottom */
    .bku-language-host[data-language-layout="settings"] {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      padding: 16px 12px;
      margin-top: auto;
      border-top: 1px solid rgba(148, 163, 184, 0.2);
    }
    .bku-language-host[data-language-layout="settings"] .bku-language-menu {
      left: 0;
      right: auto;
      bottom: calc(100% + 8px);
    }
    /* Landing hero text: force left alignment */
    .hero-text-block {
      text-align: left !important;
    }
  `;
  document.head.appendChild(style);
}

function createLanguageWidget() {
  const language = getLanguage();
  const currentKey = language === "vi" ? "language.current.vi" : "language.current.en";

  return `
    <div class="bku-language-widget" data-language-widget>
      <button class="bku-language-button" type="button" data-language-toggle aria-label="${t("language.ariaLabel")}">
        <span>${t(currentKey)}</span>
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="bku-language-menu" role="menu">
        <button class="bku-language-option${language === "en" ? " is-active" : ""}" type="button" data-language-option="en">
          <span>${t("language.option.en")}</span>
          <span>${language === "en" ? "•" : ""}</span>
        </button>
        <button class="bku-language-option${language === "vi" ? " is-active" : ""}" type="button" data-language-option="vi">
          <span>${t("language.option.vi")}</span>
          <span>${language === "vi" ? "•" : ""}</span>
        </button>
      </div>
    </div>
  `;
}

function mountLanguageSwitcher() {
  let host = document.querySelector('[data-purpose="language-selector"]');

  if (!host) {
    host = document.createElement("div");
    host.className = "bku-language-host is-floating";
    document.body.appendChild(host);
  } else {
    host.classList.add("bku-language-host");
  }

  host.innerHTML = createLanguageWidget();

  const widget = host.querySelector("[data-language-widget]");
  const toggle = host.querySelector("[data-language-toggle]");

  toggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    widget?.classList.toggle("is-open");
  });

  host.querySelectorAll("[data-language-option]").forEach((option) => {
    option.addEventListener("click", () => {
      const nextLanguage = option.getAttribute("data-language-option");
      if (!nextLanguage || nextLanguage === getLanguage()) {
        widget?.classList.remove("is-open");
        return;
      }

      localStorage.setItem(languageStorageKey, nextLanguage);
      window.location.reload();
    });
  });

  document.addEventListener("click", () => {
    widget?.classList.remove("is-open");
  });
}

function applyLandingTranslations() {
  document.title = t("title.landing");
  setText(document.querySelector("header .text-xl.font-bold.text-gray-800"), "common.brand");
  const navLinks = document.querySelectorAll("header nav a");
  setText(navLinks[0], "common.nav.home");
  setText(navLinks[1], "common.nav.map");
  setText(navLinks[2], "common.nav.bkpay");
  setText(document.querySelector("#default-nav-actions a span"), "common.nav.login");
  const heroParagraphs = document.querySelectorAll(".hero-text-block p");
  setText(heroParagraphs[0], "landing.heroLine1");
  setText(heroParagraphs[1], "landing.heroLine2");
  setText(document.querySelector(".section-intro h2"), "landing.mapTitle");
  setText(document.querySelector(".section-intro p"), "landing.mapDescription");
  setText(document.querySelector(".lot-summary h3"), "landing.lotTitle");
  setText(document.querySelector("#parking-available-label"), "landing.spotsAvailable");
  const legendTexts = document.querySelectorAll(".legend-item span:last-child");
  setText(legendTexts[0], "landing.legend.zone");
  setText(legendTexts[1], "landing.legend.available");
  setText(legendTexts[2], "landing.legend.selected");
  setText(legendTexts[3], "landing.legend.unavailable");
  setText(document.querySelector("footer h4.text-2xl"), "common.brand");
  setText(document.querySelector("footer .md\\:col-span-2 p.text-gray-600"), "landing.footerDescription");
  setHTML(document.querySelector("footer .md\\:col-span-2 p.text-xs"), "landing.footerCopyrightHtml");
  const footerHeadings = document.querySelectorAll("footer h5");
  setText(footerHeadings[0], "common.technician");
  setText(footerHeadings[1], "common.help");
  const footerLabels = document.querySelectorAll("footer .text-gray-500.mb-1");
  setText(footerLabels[0], "common.emailLabel");
  setText(footerLabels[1], "common.telLabel");
  const footerLinks = document.querySelectorAll("footer ul a");
  setText(footerLinks[0], "common.contactUs");
  setText(footerLinks[1], "common.privacyPolicy");
  setText(footerLinks[2], "common.termsOfService");
}

function applyLoginTranslations() {
  document.title = t("title.login");
  setText(document.querySelector("header h1"), "login.welcomeBack");
  setText(document.querySelector("header p"), "login.subtitle");
  const labels = document.querySelectorAll("form label");
  setText(labels[0], "login.emailAddress");
  setText(labels[1], "login.password");
  setPlaceholder(document.querySelector("#email"), "login.emailPlaceholder");
  setPlaceholder(document.querySelector("#password"), "login.passwordPlaceholder");
  setText(document.querySelector('label[for="remember"]'), "login.rememberMe");
  setText(document.querySelector('button[type="submit"]'), "login.logIn");
}

function applySettingsHomeTranslations() {
  document.title = t("title.settingsHome");
  setText(document.querySelector(".brand-text"), "common.brand");
  setPlaceholder(document.querySelector(".sidebar-search input"), "common.searchPlaceholder");
  setText(document.querySelectorAll(".sidebar-nav .nav-item")[0].querySelector("span:last-child"), "settings.nav.home");
  setText(document.querySelectorAll(".sidebar-nav .nav-item")[1].querySelector("span:last-child"), "settings.nav.billing");
  setText(document.querySelectorAll(".sidebar-nav .nav-item")[2].querySelector("span:nth-of-type(2)"), "settings.nav.setting");
  setText(document.querySelector(".dashboard-header h1"), "settings.title");
  const summaryLabels = document.querySelectorAll(".summary-card span");
  setText(summaryLabels[0], "settings.semesterFee");
  setText(summaryLabels[1], "settings.lastSemesterFee");
  setText(summaryLabels[2], "settings.activeTime");
  const headers = document.querySelectorAll(".panel-header h2");
  setText(headers[0], "settings.profilePhoto");
  setText(headers[1], "settings.loginState");
  setText(headers[2], "settings.userDetails");
  setText(document.querySelector("#remove-photo"), "settings.remove");
  setText(document.querySelector(".profile-rules h3"), "settings.imageRequirements");
  const requirements = document.querySelectorAll(".profile-rules li");
  setText(requirements[0], "settings.reqMin");
  setText(requirements[1], "settings.reqMax");
  setText(requirements[2], "settings.reqFace");
  const stateTexts = document.querySelectorAll(".state-legend span");
  if (stateTexts[0]) {
    const label = stateTexts[0].childNodes[stateTexts[0].childNodes.length - 1];
    label.textContent = ` ${t("settings.active")}`;
  }
  if (stateTexts[1]) {
    const label = stateTexts[1].childNodes[stateTexts[1].childNodes.length - 1];
    label.textContent = ` ${t("settings.unactive")}`;
  }
  const fieldLabels = document.querySelectorAll(".details-form .field > span:first-child");
  setText(fieldLabels[0], "settings.firstName");
  setText(fieldLabels[1], "settings.lastName");
  setText(fieldLabels[2], "settings.emailAddress");
  setText(fieldLabels[3], "settings.password");
  setText(fieldLabels[4], "settings.parkingZone");
  setPlaceholder(document.querySelector('input[name="firstName"]'), "settings.firstNamePlaceholder");
  setPlaceholder(document.querySelector('input[name="lastName"]'), "settings.lastNamePlaceholder");
  setPlaceholder(document.querySelector('input[name="email"]'), "settings.emailPlaceholder");
  setPlaceholder(document.querySelector('input[name="password"]'), "settings.passwordPlaceholder");
  setInlineTrailingText(document.querySelector(".upload-button"), "settings.uploadPhoto");
  setText(document.querySelector('.submit-button[type="submit"]'), "settings.saveProfile");
  setText(document.querySelector("#logout-button"), "settings.logout");
  const banner = document.querySelector("#save-banner");
  if (banner) {
    const bannerTexts = banner.querySelectorAll("strong, span");
    setText(bannerTexts[1], "settings.successSaved");
    setText(bannerTexts[2], "settings.successSavedMessage");
  }
  const dismissButton = document.querySelector("#dismiss-banner");
  if (dismissButton) {
    dismissButton.setAttribute("aria-label", getLanguage() === "vi" ? "Đóng" : "Dismiss");
  }
}

function applySettingsBillTranslations() {
  document.title = t("title.settingsBill");
  setText(document.querySelector(".brand-text"), "common.brand");
  setPlaceholder(document.querySelector(".sidebar-search input"), "common.searchPlaceholder");
  setText(document.querySelectorAll(".sidebar-nav .nav-item")[0].querySelector("span:last-child"), "settings.nav.home");
  setText(document.querySelectorAll(".sidebar-nav .nav-item")[1].querySelector("span:last-child"), "settings.nav.bill");
  setText(document.querySelectorAll(".sidebar-nav .nav-item")[2].querySelector("span:nth-of-type(2)"), "settings.nav.setting");
  setText(document.querySelector(".dashboard-header h1"), "settings.title");
  const summaryLabels = document.querySelectorAll(".summary-card span");
  setText(summaryLabels[0], "settings.semesterFee");
  setText(summaryLabels[1], "settings.lastSemesterFee");
  setText(summaryLabels[2], "settings.activeTime");
  const tableHeadings = document.querySelectorAll(".billing-table thead th");
  setText(tableHeadings[0], "billing.tableTitle");
  setText(tableHeadings[1], "billing.date");
  setText(tableHeadings[2], "billing.checkIn");
  setText(tableHeadings[3], "billing.checkOut");
  setText(tableHeadings[4], "billing.fee");
}

function applyBkPayTranslations() {
  document.title = t("title.bkpay");
  setText(document.querySelector("header .text-2xl.font-bold"), "common.brand");
  const navLinks = document.querySelectorAll("header nav a");
  setText(navLinks[0], "common.nav.home");
  setText(navLinks[1], "common.nav.map");
  setText(navLinks[2], "common.nav.bkpay");
  setText(document.querySelector("main h1"), "bkpay.scanTitle");
  setText(document.querySelector('[data-purpose="action-button"]'), "bkpay.checkBill");
  translateCommonStandaloneFooter();
}

function applyErrorTranslations() {
  document.title = t("title.error");
  setText(document.querySelector("header .text-2xl.font-bold"), "common.brand");
  const navLinks = document.querySelectorAll("header nav a");
  setText(navLinks[0], "common.nav.home");
  setText(navLinks[1], "common.nav.map");
  setText(navLinks[2], "common.nav.bkpay");
  const authLinks = document.querySelectorAll("header .flex.items-center.space-x-6 a span");
  setText(authLinks[0], "common.nav.login");
  setText(authLinks[1], "common.nav.signUp");
  setText(document.querySelector('[data-purpose="error-message"]'), "error.pageNotFound");
  setText(document.querySelector('[data-purpose="home-button"]'), "common.homePage");
  translateCommonStandaloneFooter();
}

function applyThankYouTranslations() {
  document.title = t("title.thankYou");
  setText(document.querySelector("header .font-bold.text-xl"), "common.brand");
  const navLinks = document.querySelectorAll("header nav a");
  setText(navLinks[0], "common.nav.home");
  setText(navLinks[1], "common.nav.map");
  setText(navLinks[2], "common.nav.bkpay");
  const authLinks = document.querySelectorAll("header .flex.items-center.gap-4 a");
  setInlineTrailingText(authLinks[0], "common.nav.login");
  setInlineTrailingText(authLinks[1], "common.nav.signUp");
  setText(document.querySelector("main h1"), "thankYou.title");
  setText(document.querySelector("main h2"), "thankYou.processing");
  setText(document.querySelector("main p.max-w-3xl"), "thankYou.description");
  setText(document.querySelector('[data-purpose="home-button"]'), "common.homePage");
  translateCommonStandaloneFooter();
}

function translateCommonStandaloneFooter() {
  const footer = document.querySelector("footer");
  if (!footer) {
    return;
  }

  const brand = footer.querySelector(".font-bold.text-2xl, .text-xl.font-bold");
  setText(brand, "common.brand");
  const infoParagraph = footer.querySelector("p.text-sm.text-gray-700");
  setText(infoParagraph, "common.supportNotice");
  const copyrightParagraph = footer.querySelector("p.text-xs.text-gray-500, p.text-sm.text-gray-500");
  setHTML(copyrightParagraph, "common.copyrightHtml");
  const headings = footer.querySelectorAll("h3");
  setText(headings[0], "common.technician");
  setText(headings[1], "common.help");
  const technicianSection = headings[0]?.parentElement;
  const infoBlocks = technicianSection
    ? [...technicianSection.querySelectorAll("div")].filter((node) => node.querySelectorAll(":scope > p").length >= 1)
    : [];
  if (infoBlocks.length >= 2) {
    setText(infoBlocks[0].querySelector(":scope > p"), "common.emailLabel");
    setText(infoBlocks[1].querySelector(":scope > p"), "common.telLabel");
  }
  const links = footer.querySelectorAll("ul a");
  setText(links[0], "common.contactUs");
  setText(links[1], "common.privacyPolicy");
  setText(links[2], "common.termsOfService");
}

function applyTranslations() {
  document.documentElement.lang = getLanguage() === "vi" ? "vi" : "en";

  switch (getPageKey()) {
    case "landing":
      applyLandingTranslations();
      break;
    case "login":
      applyLoginTranslations();
      break;
    case "settings-home":
      applySettingsHomeTranslations();
      break;
    case "settings-bill":
      applySettingsBillTranslations();
      break;
    case "bkpay":
      applyBkPayTranslations();
      break;
    case "error":
      applyErrorTranslations();
      break;
    case "thank-you":
      applyThankYouTranslations();
      break;
    default:
      break;
  }
}

window.bkuI18n = { t, getLanguage, applyTranslations };

document.addEventListener("DOMContentLoaded", () => {
  ensureLanguageStyles();
  mountLanguageSwitcher();
  applyTranslations();
});