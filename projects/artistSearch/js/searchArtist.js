document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', searchArtist);
    console.log('DOMContentLoaded event fired, searchButton event listener added');
});
const artistsData = {
    "eminem": {
        bio: "Eminem is an American rapper, songwriter, and record producer known for his controversial and influential music.",
        image: "images/eminem.jpeg",
        link: "eminem.html",
        news: [
            "Eminem releases surprise album.",
            "Eminem's latest diss track targets several celebrities."
        ],
        albums: [
            {
                title: "The Marshall Mathers LP",
                cover: "images/marshall_mathers_lp.jpeg",
                releaseDate: "2000-05-23",
                featuring: ["Dido", "Snoop Dogg"],
                story: "The Marshall Mathers LP is one of Eminem's most acclaimed albums, known for its dark and introspective themes."
            },
            {
                title: "Recovery",
                cover: "images/recovery.jpg",
                releaseDate: "2010-06-18",
                featuring: ["Rihanna", "Lil Wayne"],
                story: "Recovery marks Eminem's return to form, addressing his struggles with addiction and personal issues."
            }
        ],
        similarArtists: [
            {
                name: "Dr. Dre",
                bio: "Dr. Dre is an American rapper, record producer, and entrepreneur known for his influential work in the hip-hop industry.",
                image: "images/dr_dre.jpeg",
                link: "dr_dre.html"
            },
            {
                name: "50 Cent",
                bio: "50 Cent is an American rapper, actor, and businessman known for his impact on the hip-hop genre.",
                image: "images/50_cent.jpeg",
                link: "50_cent.html"
            },
            {
                name: "Snoop Dogg",
                bio: "Snoop Dogg is an American rapper, singer, and media personality known for his laid-back style and smooth flow.",
                image: "images/snoop_dogg.jpeg",
                link: "snoop_dogg.html"
            }
        ]
    },
    "dr dre": {
        bio: "Dr. Dre is an American rapper, record producer, and entrepreneur known for his influential work in the hip-hop industry.",
        image: "images/dr_dre.jpeg",
        link: "dr_dre.html",
        news: [
            "Dr. Dre announces new album.",
            "Dr. Dre collaborates with top artists on new project."
        ],
        albums: [
            {
                title: "The Chronic",
                cover: "images/the_chronic.jpeg",
                releaseDate: "1992-12-15",
                featuring: ["Snoop Dogg", "Daz Dillinger"],
                story: "The Chronic is Dr. Dre's debut solo album, known for its innovative production and G-funk style."
            },
            {
                title: "2001",
                cover: "images/2001.jpeg",
                releaseDate: "1999-11-16",
                featuring: ["Eminem", "Snoop Dogg"],
                story: "2001 is a critically acclaimed album that solidified Dr. Dre's status as a top producer and artist."
            }
        ],
        similarArtists: [
            {
                name: "Eminem",
                bio: "Eminem is an American rapper, songwriter, and record producer known for his controversial and influential music.",
                image: "images/eminem.jpeg",
                link: "eminem.html"
            },
            {
                name: "50 Cent",
                bio: "50 Cent is an American rapper, actor, and businessman known for his impact on the hip-hop genre.",
                image: "images/50_cent.jpeg",
                link: "50_cent.html"
            },
            {
                name: "Snoop Dogg",
                bio: "Snoop Dogg is an American rapper, singer, and media personality known for his laid-back style and smooth flow.",
                image: "images/snoop_dogg.jpeg",
                link: "snoop_dogg.html"
            }
        ]
    },
    // Add more artists data here
};

function searchArtist() {
    console.log('searchArtist function called');
    const searchQuery = document.getElementById('search-box').value.trim().toLowerCase();
    console.log('Search query:', searchQuery);

    const artist = artistsData[searchQuery];
    console.log('Artist data:', artist);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (artist) {
        const artistBox = document.createElement('div');
        artistBox.className = 'artist-box';

        const artistLink = document.createElement('a');
        artistLink.href = artist.link;
        artistLink.className = 'artist-link';

        const artistImage = document.createElement('img');
        artistImage.src = artist.image;
        artistImage.alt = searchQuery;
        artistImage.className = 'artist-image';

        const artistBio = document.createElement('p');
        artistBio.textContent = artist.bio;

        artistLink.appendChild(artistImage);
        artistBox.appendChild(artistLink);
        artistBox.appendChild(artistBio);

        const artistNews = document.createElement('section');
        artistNews.className = 'artist-news';
        const newsHeader = document.createElement('h2');
        newsHeader.textContent = 'Latest News';
        const newsList = document.createElement('ul');
        artist.news.forEach(newsItem => {
            const newsListItem = document.createElement('li');
            newsListItem.textContent = newsItem;
            newsList.appendChild(newsListItem);
        });
        artistNews.appendChild(newsHeader);
        artistNews.appendChild(newsList);
        artistBox.appendChild(artistNews);

        const artistAlbums = document.createElement('section');
        artistAlbums.className = 'artist-albums';
        const albumsHeader = document.createElement('h2');
        albumsHeader.textContent = 'Albums';
        artistAlbums.appendChild(albumsHeader);
        artist.albums.forEach(album => {
            const albumDiv = document.createElement('div');
            albumDiv.className = 'album';

            const albumCover = document.createElement('img');
            albumCover.src = album.cover;
            albumCover.alt = album.title;
            albumCover.className = 'album-cover';

            const albumInfo = document.createElement('div');
            albumInfo.className = 'album-info';

            const albumTitle = document.createElement('h3');
            albumTitle.textContent = album.title;

            const albumReleaseDate = document.createElement('p');
            albumReleaseDate.innerHTML = `<strong>Release Date:</strong> ${album.releaseDate}`;

            const albumFeaturing = document.createElement('p');
            albumFeaturing.innerHTML = `<strong>Featuring:</strong> ${album.featuring.join(', ')}`;

            const albumStory = document.createElement('p');
            albumStory.textContent = album.story;

            albumInfo.appendChild(albumTitle);
            albumInfo.appendChild(albumReleaseDate);
            albumInfo.appendChild(albumFeaturing);
            albumInfo.appendChild(albumStory);

            albumDiv.appendChild(albumCover);
            albumDiv.appendChild(albumInfo);

            artistAlbums.appendChild(albumDiv);
        });
        artistBox.appendChild(artistAlbums);

        resultsDiv.appendChild(artistBox);

        const similarArtistsDiv = document.createElement('div');
        similarArtistsDiv.className = 'similar-artists-row';

        artist.similarArtists.forEach(similarArtist => {
            const similarArtistBox = document.createElement('div');
            similarArtistBox.className = 'similar-artist-item';

            const similarArtistLink = document.createElement('a');
            similarArtistLink.href = similarArtist.link;
            similarArtistLink.className = 'artist-link';

            const similarArtistImage = document.createElement('img');
            similarArtistImage.src = similarArtist.image;
            similarArtistImage.alt = similarArtist.name;
            similarArtistImage.className = 'artist-image';

            const similarArtistName = document.createElement('p');
            similarArtistName.textContent = similarArtist.name;

            similarArtistLink.appendChild(similarArtistImage);
            similarArtistBox.appendChild(similarArtistLink);
            similarArtistBox.appendChild(similarArtistName);

            similarArtistsDiv.appendChild(similarArtistBox);
        });

        resultsDiv.appendChild(similarArtistsDiv);
    } else {
        const noResults = document.createElement('p');
        noResults.textContent = 'No results found.';
        resultsDiv.appendChild(noResults);
    }
}