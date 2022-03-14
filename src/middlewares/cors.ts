export const cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://frontend-newsletter-nextjs.vercel.app/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    next();
}