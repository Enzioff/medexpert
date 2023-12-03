const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const hidden = fs.readFileSync("src/includes/hidden.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Медэксперт лаборатория",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/stock.html",
        filename: "stock.html",
        inject: "body",
        title: "Акции",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/stock-detail.html",
        filename: "stock-detail.html",
        inject: "body",
        title: "Акции детальная страница",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/analyses.html",
        filename: "analyses.html",
        inject: "body",
        title: "Анализы",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/analyses-detail.html",
        filename: "analyses-detail.html",
        inject: "body",
        title: "Анализы детальная",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/departure.html",
        filename: "departure.html",
        inject: "body",
        title: "Выезд на дом",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/patient.html",
        filename: "patient.html",
        inject: "body",
        title: "Пациентам",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/rules.html",
        filename: "rules.html",
        inject: "body",
        title: "Правила подготовки к анализам",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/gosuslugi.html",
        filename: "gosuslugi.html",
        inject: "body",
        title: "Результат на госуслугах",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/terms.html",
        filename: "terms.html",
        inject: "body",
        title: "Сроки выполнения анализов",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/fns.html",
        filename: "fns.html",
        inject: "body",
        title: "Справка для ФНС",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/payment.html",
        filename: "payment.html",
        inject: "body",
        title: "Справка для ФНС",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/news-detail.html",
        filename: "news-detail.html",
        inject: "body",
        title: "Новости деталка",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/articles.html",
        filename: "articles.html",
        inject: "body",
        title: "Статьи",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/dms.html",
        filename: "dms.html",
        inject: "body",
        title: "ДМС",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/about.html",
        filename: "about.html",
        inject: "body",
        title: "О компании",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/clinics.html",
        filename: "clinics.html",
        inject: "body",
        title: "Клиники",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/docs.html",
        filename: "docs.html",
        inject: "body",
        title: "Нормативные документы",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/quality-control.html",
        filename: "quality-control.html",
        inject: "body",
        title: "Контроль качества",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/smi.html",
        filename: "smi.html",
        inject: "body",
        title: "СМИ о Нас",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/vacancy.html",
        filename: "vacancy.html",
        inject: "body",
        title: "Вакансии",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/technologies.html",
        filename: "technologies.html",
        inject: "body",
        title: "Технологии",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/equipment.html",
        filename: "equipment.html",
        inject: "body",
        title: "Оборудование",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/policy.html",
        filename: "policy.html",
        inject: "body",
        title: "Политика конфиденциальности",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/clinics-detail.html",
        filename: "clinics-detail.html",
        inject: "body",
        title: "Карточка центра",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/news.html",
        filename: "news.html",
        inject: "body",
        title: "Новости",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/addresses.html",
        filename: "addresses.html",
        inject: "body",
        title: "Адреса",
        head,
        sectionHeader,
        sectionFooter,
        temp,
        hidden
    }),
];
