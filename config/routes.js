/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": { view: "pages/homepage" },
  "POST /uploadImage": {
    controller: "UploadController",
    action: "uploadImage",
  },
  "POST /admin/login": {
    controller: "AdminController",
    action: "login",
  },
  "POST /customer/login": {
    controller: "customerController",
    action: "login",
  },
  "POST /customer/changeProfile": {
    controller: "customerController",
    action: "changeProfile",
  },
  "POST /customer/changePassword": {
    controller: "customerController",
    action: "changePassword",
  },
  "POST /customer/resetPassword": {
    controller: "customerController",
    action: "resetPassword",
  },
  "POST /customer/bookOrderProduct": {
    controller: "productOrderController",
    action: "bookOrderProduct",
  },
  "POST /customer/addToCart": {
    controller: "cartController",
    action: "addToCart",
  },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
