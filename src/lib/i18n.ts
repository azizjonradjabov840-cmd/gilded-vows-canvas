import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      lock: {
        title: "SIZGA TAKLIFNOMA KELDI",
        hint: "Qulfchani bosib, taklifnomani oching",
      },
      hero: {
        and: "VA",
        scroll: "PASTGA SURING",
      },
      invite: {
        heading: "Aziz va qadrdon insonimiz!",
        body:
          "Hayotimizdagi eng baxtli kunlardan biri — nikoh to'yimizni siz bilan birga nishonlashni niyat qildik. Sizni ushbu kechamizga samimiy taklif etamiz. Quvonchli kunimizda aziz mehmonimiz bo'lishingizni intizorlik bilan kutamiz.",
      },
      calendar: {
        month: "IYUN 2026",
        days: ["DU", "SE", "CHOR", "PAY", "JU", "SHA", "YA"],
      },
      venue: {
        title: "To'y manzili",
        name: "ERKINOBOD TO'YXONASI",
        time: "Vaqti: 18:00",
        address: "Manzil: G'ijduvon tumani, Erkinobod to'yxonasi",
        yandex: "YANDEX XARITASI",
        google: "GOOGLE MAPS",
      },
      countdown: {
        title: "Har lahzani sanayapmiz",
        days: "KUN",
        hours: "SOAT",
        minutes: "DAQIQA",
        seconds: "SONIYA",
        done: "Bugun aynan o'sha kun. Sizni kutamiz!",
      },
      music: { tooltip: "Musiqa yoqish uchun bosing" },
    },
  },
  ru: {
    translation: {
      lock: {
        title: "ВАМ ПРИШЛО ПРИГЛАШЕНИЕ",
        hint: "Нажмите на замок, чтобы открыть приглашение",
      },
      hero: {
        and: "И",
        scroll: "ЛИСТАЙТЕ ВНИЗ",
      },
      invite: {
        heading: "Дорогой и любимый человек!",
        body:
          "Один из самых счастливых дней нашей жизни — нашу свадьбу — мы хотим разделить с вами. Сердечно приглашаем вас на наше торжество. С нетерпением ждём вас в этот радостный для нас день.",
      },
      calendar: {
        month: "ИЮНЬ 2026",
        days: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
      },
      venue: {
        title: "Место торжества",
        name: "РЕСТОРАН ЭРКИНОБОД",
        time: "Время: 18:00",
        address: "Адрес: Гиждуванский район, тойхона Эркинобод",
        yandex: "ЯНДЕКС КАРТЫ",
        google: "GOOGLE КАРТЫ",
      },
      countdown: {
        title: "Считаем каждое мгновение",
        days: "ДНЕЙ",
        hours: "ЧАСОВ",
        minutes: "МИНУТ",
        seconds: "СЕКУНД",
        done: "Этот день настал. Ждём вас!",
      },
      music: { tooltip: "Нажмите, чтобы включить музыку" },
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "uz",
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
  });
}

export default i18n;