export const corsmiddleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://frontend-newsletter-nextjs.vercel.app/");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST");
    res.header("Access-Control-Allow-Headers", "*");
    next();
};