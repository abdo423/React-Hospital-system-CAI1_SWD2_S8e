import React from 'react';

function Map() {
    return (
        <iframe
            className="mt-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.117000961717!2d90.38812554364252!3d23.73903349495663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c740f17d1%3A0xdd3daab8c90eb11f!2sCodexCoder!5e0!3m2!1sen!2seg!4v1725270135935!5m2!1sen!2seg"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Embed"
        ></iframe>
    );
};

export default Map;
