/**
 * reservation service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::reservation.reservation', ({strapi}) => ({
    async sendEmail(ctx){
        await strapi.plugins['email'].services.email.send({
            to: 'jlassiezzeddine@gmail.com',
            from: 'jlassiezzeddine@gmail.com', //e.g. single sender verification in SendGrid
            cc: 'jlassiezzeddine@gmail.com',
            bcc: 'jlassiezzeddine@gmail.com',
            replyTo: 'jlassiezzeddine@gmail.com',
            subject: 'The Strapi Email plugin worked successfully',
            text: 'Hello world!',
            html: 'Hello world!',
          })
    }
}));
