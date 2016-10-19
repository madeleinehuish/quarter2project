/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = function(knex) {
  return knex('movies').del()
    .then(() => {
      return knex('movies').insert([{
        id: 1,
        title: 'The Shining',
        director: 'Stanley Kubrick',
        year: '1980',
        poster_path: 'http://ia.media-imdb.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_SX300.jpg',
        synopsis: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the…",
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/284/javascript_the_good_parts.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        title: 'Burnt Offerings',
        director: 'Dan Curtis',
        year: '1976',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzNzYzNTc3Nl5BMl5BanBnXkFtZTgwMDUwNTkyMTE@._V1_SX300.jpg',
        synopsis: "A family moves into an old, haunted house that regenerates itself by feeding off of the life forces of its injured occupants.",
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/287/learning_react_native.jpg',
        created_at: new Date('2016-06-26 14:26:17 UTC'),
        updated_at: new Date('2016-06-26 14:26:17 UTC')
      }, {
        id: 3,
        title: 'Event Horizon',
        director: 'Paul W.S. Anderson',
        year: '1997',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNzY0MjczNV5BMl5BanBnXkFtZTgwOTIxNzQxMTE@._V1_SX300.jpg',
        synopsis: 'A rescue crew investigates a spaceship that disappeared into a black hole and has now returned...with someone or something new on-board.',
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/297/functional_javascript.jpg',
        created_at: new Date('2016-06-26 14:26:18 UTC'),
        updated_at: new Date('2016-06-26 14:26:18 UTC')
      }, {
        id: 4,
        title: 'An American Werewolf in London',
        director: 'John Landis',
        year: '1981',
        poster_path: 'http://ia.media-imdb.com/images/M/MV5BZTk5NGQ0ZTktYWM2Yi00ZWQwLTg4NzItYzUxNjk1MDU5ODc5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: 'Two American college students on a walking tour of Britain are attacked by a werewolf that none of the locals will admit exists.',
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/294/react_up_and_running.jpg',
        created_at: new Date('2016-06-26 14:26:19 UTC'),
        updated_at: new Date('2016-06-26 14:26:19 UTC')
      }, {
        id: 5,
        title: 'The Exorcist',
        director: 'William Friedkin',
        year: '1973',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzczOGRlMzQtNDAzMS00MjdlLTk5Y2QtNTM3MDE3NjRkYzQwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: 'When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.',
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/295/javascript_design_patterns.jpg',
        created_at: new Date('2016-06-26 14:26:20 UTC'),
        updated_at: new Date('2016-06-26 14:26:20 UTC')
      }, {
        id: 6,
        title: 'Videodrome',
        director: 'David Cronenberg',
        year: '1983',
        poster_path: 'http://wrongsideoftheart.com/wp-content/gallery/posters-v/videodrome_poster_01.jpg',
        synopsis: 'A sleazy cable-TV programmer begins to see his life and the future of media spin out of control in a very unusual fashion when he acquires a new kind of programming for his station.',
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/296/javascript_with_promises.jpg',
        created_at: new Date('2016-06-26 14:26:21 UTC'),
        updated_at: new Date('2016-06-26 14:26:21 UTC')
      }, {
        id: 7,
        title: "Bram Stoker's Dracula",
        director: 'Francis Ford Coppola',
        year: '1992',
        poster_path: 'http://ia.media-imdb.com/images/M/MV5BMTYyOTM5NzU3Nl5BMl5BanBnXkFtZTgwOTQxNjAxNzE@._V1_SX300.jpg',
        synopsis: 'The vampire comes to England to seduce a visitor\'s fiancée and inflict havoc in the foreign land.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920033486/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:22 UTC'),
        updated_at: new Date('2016-06-26 14:26:22 UTC')
      }, {
        id: 8,
        title: 'Alien',
        director: 'Ridley Scott',
        year: '1979',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDNhN2IxZWItNGEwYS00ZDNhLThiM2UtODU3NWJlZjBkYjQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: '',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:23 UTC'),
        updated_at: new Date('2016-06-26 14:26:23 UTC')
      }, {
        id: 9,
        title: 'The Evil Dead',
        director: 'Ridley Scott',
        year: '1981',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODc2MmVjZmUtNjAzMS00MDNiLWIyM2YtOGEzMjg0YjRhMzRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: 'Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:24 UTC'),
        updated_at: new Date('2016-06-26 14:26:24 UTC')
      }, {
        id: 10,
        title: 'The Thing',
        director: 'John Carpenter',
        year: '1982',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTRlMGIzYjItNTUwYS00OTc2LTk0ODktMGRjYWNlOTg3NzkwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: "It's the first week of winter in 1982. An American Research Base is greeted by an alien force, that can assimilate anything it touches. It's up to the members to stay alive, and be sure of who is human, and who has become one of the Things.",
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:25 UTC'),
        updated_at: new Date('2016-06-26 14:26:25 UTC')
      }, {
        id: 11,
        title: 'Re-Animator',
        director: 'Stuart Gordon',
        year: '1985',
        poster_path: 'http://ia.media-imdb.com/images/M/MV5BNTA5YjI0MTEtMWRmZS00OGViLWEwYWYtYWY3OWY4YWNmNzExXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: 'A dedicated student at a medical college and his girlfriend become involved in bizarre experiments centering around the re-animation of dead tissue when an odd new student arrives on campus.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:26 UTC'),
        updated_at: new Date('2016-06-26 14:26:26 UTC')
      }, {
        id: 12,
        title: 'Hellraiser',
        director: 'Clive Barker',
        year: '1987',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNzc4NjkwNV5BMl5BanBnXkFtZTgwNzI2Mjc1MDE@._V1_SX300.jpg',
        synopsis: 'An unfaithful wife encounters the zombie of her dead lover; demons are pursuing him after he escaped their sadomasochistic underworld.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:27 UTC'),
        updated_at: new Date('2016-06-26 14:26:27 UTC')
      }, {
        id: 13,
        title: 'The Omen',
        director: 'Richard Donner',
        year: '1976',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODE2ODQ5MzYyNl5BMl5BanBnXkFtZTgwODc1Mjc1MDE@._V1_SX300.jpg',
        synopsis: "Mysterious deaths surround an American ambassador. Could the child that he is raising actually be the Antichrist? The Devil's own son?",
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:28 UTC'),
        updated_at: new Date('2016-06-26 14:26:28 UTC')
      }, {
        id: 14,
        title: 'Halloween',
        director: 'John Carpenter',
        year: '1978',
        poster_path: 'http://ia.media-imdb.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: 'On Halloween night of 1963, six-year-old Michael Myers stabbed his sister to death. After sitting in a mental hospital for 15 years, Myers escapes and returns to Haddonfield to kill.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:29 UTC'),
        updated_at: new Date('2016-06-26 14:26:29 UTC')
      }, {
        id: 15,
        title: "Rosemary's Baby",
        director: 'Roman Polanski',
        year: '1968',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NzE4NzkyNl5BMl5BanBnXkFtZTgwNTYyODgwNzE@._V1_SX300.jpg',
        synopsis: 'A young couple move into an apartment, only to be surrounded by peculiar neighbors and occurrences. When the wife becomes mysteriously pregnant, paranoia over the safety of her unborn child begins to control her life.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:30 UTC'),
        updated_at: new Date('2016-06-26 14:26:30 UTC')
      }, {
        id: 16,
        title: 'Bloodsucking Freaks',
        director: 'Joel M. Reed',
        year: '1976',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1NzE5Mjg1Ml5BMl5BanBnXkFtZTcwMzU3OTAyMQ@@._V1_SX300.jpg',
        synopsis: 'Sardu, master of the Theatre of the Macabre, and his assistant Ralphus run a show in which, under the guise of \'magic\', they torture and murder people in front of their audience. But what the punters see as a trick is actually real.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:31 UTC'),
        updated_at: new Date('2016-06-26 14:26:31 UTC')
      }, {
        id: 17,
        title: 'The Tenant',
        director: 'Roman Polanski',
        year: '1976',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4ODkxNjMxNl5BMl5BanBnXkFtZTcwNzAzMjUyMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg',
        synopsis: 'A bureaucrat rents a Paris apartment where he finds himself drawn into a rabbit hole of dangerous paranoia.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:32 UTC'),
        updated_at: new Date('2016-06-26 14:26:32 UTC')
      }, {
        id: 18,
        title: 'The Changeling',
        director: 'Peter Medak',
        year: '1980',
        poster_path: 'http://ia.media-imdb.com/images/M/MV5BMTIzMTE4MDQ2MF5BMl5BanBnXkFtZTYwMDg3MDE5._V1_SX300.jpg',
        synopsis: 'A man staying at a secluded historical mansion finds himself being haunted by the presence of a spectre.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:33 UTC'),
        updated_at: new Date('2016-06-26 14:26:33 UTC')
      }, {
        id: 19,
        title: 'Altered States',
        director: 'Ken Russell',
        year: '1980',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYmUyMWU5NzQtZDE4OS00OGI2LTliNGYtOGUyZWUzODhiMTk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        synopsis: "Harvard scientist Eddie Jessup's (William Hurt) mind-altering experiments on himself, involving a hallucinatory drug and an isolation chamber, get out of control when his handiwork shuttles him back and forth on the evolutionary spectrum -- from human to ape-man. Equal parts sci-fi actioner, 1960s psychedelic trip and farce, the film was based on a Paddy Chayefsky novel and received Oscar nominations for music and sound. Blair Brown co-stars.",
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:34 UTC'),
        updated_at: new Date('2016-06-26 14:26:34 UTC')
      }, {
        id: 20,
        title: 'The Howling',
        director: 'Joe Dante',
        year: '1981',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZTcwZmIyNjAtMWM4Yy00YzE1LTk5YzQtNjVlY2IxNzMwNzc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: 'After a bizarre and near fatal encounter with a serial killer, a television newswoman is sent to a remote mountain resort whose residents may not be what they seem.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:35 UTC'),
        updated_at: new Date('2016-06-26 14:26:35 UTC')
      }, {
        id: 21,
        title: 'The Hunger',
        director: 'Tony Scott',
        year: '1983',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjM1NDM3OF5BMl5BanBnXkFtZTcwNzU2OTY1Mw@@._V1_SX300.jpg',
        synopsis: 'A love triangle develops between a beautiful yet dangerous vampire, her cellist companion, and a gerontologist.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:36 UTC'),
        updated_at: new Date('2016-06-26 14:26:36 UTC')
      }, {
        id: 22,
        title: 'Friday the 13th',
        director: 'Sean S. Cunningham',
        year: '1980',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: "A group of camp counselors is stalked and murdered by an unknown assailant while trying to reopen a summer camp which, years before, was the site of a child's drowning.",
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:37 UTC'),
        updated_at: new Date('2016-06-26 14:26:37 UTC')
      }, {
        id: 23,
        title: 'The Texas Chainsaw Massacre',
        director: 'Tobe Hooper',
        year: '1974',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDI3OWE0ZWMtNGJjOS00N2E4LWFiOTAtZjQ4OTNiNzIwN2NkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        synopsis: "Two siblings visit their grandfather's grave in Texas along with three of their friends and are attacked by a family of cannibalistic psychopaths.",
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:38 UTC'),
        updated_at: new Date('2016-06-26 14:26:38 UTC')
      }, {
        id: 24,
        title: 'The Lair of the White Worm',
        director: 'Ken Russell',
        year: '1988',
        poster_path: 'http://ia.media-imdb.com/images/M/MV5BMTUyNDU3MDI5OV5BMl5BanBnXkFtZTYwNDQwNDk4._V1_SX300.jpg',
        synopsis: "Scottish archaeologist Angus Flint discovers an odd skull amid the ruins of a convent that he is excavating. Shortly thereafter, Lady Sylvia Marsh returns to Temple House, a nearby mansion, far earlier than expected. At a party in the village, Angus meets Lord James D'Ampton, who has just inherited his family's land right next to Temple House. Angus learns of the D'Ampton Worm, a huge dragon-snake that an earlier D'Ampton killed by cutting it in half. (There's a pretty catchy rock-folk song that tells the D'Ampton Worm legend.) As people begin disappearing and acting strangely over the next few days, the skull is stolen from Angus's room, and the watch of a missing person is found in a cavern that was the legendary home of the D'Ampton worm. Angus and James discover that there was an ancient cult that worshiped the worm as a god, and they theorize that the creature somehow survived its destruction, but it was trapped inside the cavern. The remainder of the movie shows Angus, James, and Mary Trent attempting to stop Lady Marsh from freeing the creature....",
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:39 UTC'),
        updated_at: new Date('2016-06-26 14:26:39 UTC')
      }, {
        id: 25,
        title: 'Prince of Darkness',
        director: 'John Carpenter',
        year: '1987',
        poster_path: 'http://ia.media-imdb.com/images/M/MV5BNzIyZWQ2MzgtM2Y5ZS00MTM2LTgwOGItOTlmMGMyOGY5ZmE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: 'A research team finds a mysterious cylinder in a deserted church. If opened, it could mean the end of the world.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:40 UTC'),
        updated_at: new Date('2016-06-26 14:26:40 UTC')
      }, {
        id: 26,
        title: 'The Ring',
        director: 'Gore Verbinski',
        year: '2002',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_SX300.jpg',
        synopsis: 'A journalist must investigate a mysterious videotape which seems to cause the death of anyone in a week of viewing it.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:41 UTC'),
        updated_at: new Date('2016-06-26 14:26:41 UTC')
      }, {
        id: 27,
        title: "Jacob's Ladder",
        director: 'Adrian Lyne',
        year: '1990',
        poster_path: 'http://ia.media-imdb.com/images/M/MV5BMjMwMDMxNzIzMF5BMl5BanBnXkFtZTgwMDMxNzQxMTE@._V1_SX300.jpg',
        synopsis: 'Mourning his dead child, a haunted Vietnam War veteran attempts to discover his past while suffering from a severe case of dissociation. To do so, he must decipher reality and life from his own dreams, delusion, and perception of death.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:42 UTC'),
        updated_at: new Date('2016-06-26 14:26:42 UTC')
      }, {
        id: 28,
        title: 'The Others',
        director: 'Alejandro Amenábar',
        year: '2001',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_SX300.jpg',
        synopsis: 'A woman who lives in a darkened old house with her two photosensitive children becomes convinced that her family home is haunted.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:43 UTC'),
        updated_at: new Date('2016-06-26 14:26:43 UTC')
      }, {
        id: 29,
        title: 'Psycho',
        director: 'Alfred Hitchcock',
        year: '1960',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDI3OWRmOTEtOWJhYi00N2JkLTgwNGItMjdkN2U0NjFiZTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:44 UTC'),
        updated_at: new Date('2016-06-26 14:26:44 UTC')
      }, {
        id: 30,
        title: 'The Birds',
        director: 'Alfred Hitchcock',
        year: '1963',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZmY5N2U4NDItMzVjMS00ZWM1LThmM2YtOTQ0MTdjNWZiMmZjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: 'A wealthy San Francisco socialite pursues a potential boyfriend to a small Northern California town that slowly takes a turn for the bizarre when birds of all kinds suddenly begin to attack people.',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:45 UTC'),
        updated_at: new Date('2016-06-26 14:26:45 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));"
      );
    });
};
