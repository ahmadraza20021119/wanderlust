const User = require("../models/user");

module.exports.renderSignupform = (req, res) => {
    res.render("users/signup");
};

module.exports.signup = async (req, res) => {
    try {
let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    await req.login(registeredUser, (err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "Welcome to Wanderlust!");
        res.redirect("/listings");
    });
    
    } catch (error) {
        req.flash("error", "Something went wrong. Please try again.");
        res.redirect("/signup");
    }
    
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login");
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back! to Wanderlust");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash("success", "Goodbye!");
        res.redirect("/listings");
    });
};