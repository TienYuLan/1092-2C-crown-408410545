'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    shopPage: async (ctx) => {
        const data = await strapi.services.product.find();
        //console.log("data", data);
        return await ctx.render("products2_45", {
            data,
            title: 'Shop Products'
        });
    },
    overviewPage: async (ctx) => {
        const category = ctx.params.category;
        //console.log("category", category);
        const cate = await strapi.services.category.findOne({name: category});
        //console.log("cate", category, cate.cid);
        const data_h = await strapi.connections.default.raw(
            `SELECT * FROM products WHERE category = 1`
            );
        const data_j = await strapi.connections.default.raw(
            `SELECT * FROM products WHERE category = 2`
            );
        const data_s = await strapi.connections.default.raw(
            `SELECT * FROM products WHERE category = 3`
            );
        const data_w = await strapi.connections.default.raw(
            `SELECT * FROM products WHERE category = 4`
            );
        const data_m = await strapi.connections.default.raw(
            `SELECT * FROM products WHERE category = 5`
            );
        const count = 4;
        //console.log("data", data);
        return await ctx.render("shopOverview2_45", {
            data_h,
            data_j,
            data_s,
            data_w,
            data_m,
            count,
            title: 'Shop Overview'
        });
    },

    categoryPage: async (ctx) => {
        const category = ctx.params.category;
        //console.log("category", category);
        const cate = await strapi.services.category.findOne({name: category});
        //console.log("cate", category, cate.cid);
        const data = await strapi.connections.default.raw(
            `SELECT * FROM products WHERE category = ${cate.cid}`
            );
        //console.log("data", JSON.stringify(data));
        return await ctx.render("products2_45", {
            data,
            title: ctx.params.category
        });
    },
    productPage: async (ctx) => {
        const category = ctx.params.category;
        //console.log("category", category);
        const cate = await strapi.services.category.findOne({name: category});
        //console.log("cate", category, cate.cid);
        const data = await strapi.connections.default.raw(
            `SELECT * FROM products WHERE category = ${cate.cid}`
            );
        //console.log("data", JSON.stringify(data));
        return data
            
        
    },
};
