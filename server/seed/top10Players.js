const db = require('../db')
const { TopScorers } = require ('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const top10Players = [
        {
                name: 'Cristiano Ronaldo',
                goals: '728',
                appearances: '1005',
                age: '37',
                country_of_origin: 'Portugal',
                current_team: 'Manchester United',
                league: 'Barclays Premier League',
                image: ''
            },
            {
                name: 'Lionel Messi',
                goals: '700',
                appearances: '862',
                age: '34',
                country_of_origin: 'Argentina',
                current_team: 'PSG',
                league: 'Ligue1',
                image: ''
            },
            {
                name: 'Zlatan Ibrahimovic',
                goals: '521',
                appearances: '860',
                age: '40',
                country_of_origin: 'Sweden',
                current_team: 'AC Milan',
                league: 'Serie A',
                image: ''
            },
            {
                name: 'Robert Lewandowski',
                goals: '466',
                appearances: '698',
                age: '33',
                country_of_origin: 'Poland',
                current_team: 'Bayern Munich',
                league: 'Bundesliga',
                image: ''
            },
            {
                name: 'Luis Suarez',
                goals: '459',
                appearances: '715',
                age: '35',
                country_of_origin: 'Uruguay',
                current_team: 'Barcelona',
                league: 'LaLiga',
                image: ''
            },
            {
                name: 'Sergio Aguero',
                goals: '414',
                appearances: '733',
                age: '33',
                country_of_origin: 'Argentina',
                current_team: 'Man City',
                league: 'BPL',
                image: ''
            },
            {
                name: "Samuel Eto'o",
                goals: '408',
                appearances: '805',
                age: '41',
                country_of_origin: 'Cameroon',
                current_team: '',
                league: '',
                image: ''
            },
            {
                name: 'Klaas-Jan Huntelaar',
                goals: '399',
                appearances: '714',
                age: '38',
                country_of_origin: 'Netherlands',
                current_team: 'Schalke 04',
                league: 'Bundesliga',
                image: ''
            },
            {
                name: 'Edinson Cavani',
                goals: '389',
                appearances: '668',
                age: '35',
                country_of_origin: 'Uruguay',
                current_team: 'Manchester United',
                league: 'BPL',
                image: ''
            },
            {
                name: 'David Villa',
                goals: '386',
                appearances: '740',
                age: '40',
                country_of_origin: 'Spain',
                current_team: '',
                league: '',
                image: ''
            }
        ]
        await TopScorers.insertmany(top10Players)
        console.log('players added')
        }
        const run = async () => {
            await main()
            db.close()
        }
        run()