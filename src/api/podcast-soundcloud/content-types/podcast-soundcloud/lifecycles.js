const SoundCloud = require("soundcloud-scraper");
const client = new SoundCloud.Client();
const { ApplicationError } = require("@strapi/utils").errors;
// const axios = require("axios");

module.exports = {
    async beforeCreate(event) {

        try {

            const { id, title, description, thumbnail, url, duration, playCount, likes, genre, publishedAt, embedURL } = await client.getSongInfo(event.params.data.soundcloud_url);
            strapi.query("api::podcast.podcast").create({
                data: {
                    podcast_id: id,
                    podcast_title: title,
                    podcast_description: description,
                    podcast_thumbnail: thumbnail,
                    podcast_url: url,
                    podcast_duration: duration,
                    podcast_playCount: playCount,
                    podcast_likes: likes,
                    podcast_genre: genre,
                    podcast_publishedAt: new Date(publishedAt).getTime(),
                    podcast_embedURL: embedURL
                }
            })
        } catch (error) {
            throw new ApplicationError('Mauvaise URL', 404);
        }

    }
};