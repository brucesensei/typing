
const messages = {
  4: "well done!",
  5: "You're a rising typing star!",
  6: "You're awesome!! Keep it up!",
}

const wordList = [
  {
    "file_name": "animals_bear_1.png",
    "word": "bear"
  },
  {
    "file_name": "animals_bird_1.png",
    "word": "bird"
  },
  {
    "file_name": "animals_camel_1.png",
    "word": "camel"
  },
  {
    "file_name": "animals_cat_1.png",
    "word": "cat"
  },
  {
    "file_name": "animals_cow_1.png",
    "word": "cow"
  },
  {
    "file_name": "animals_dog_1.png",
    "word": "dog"
  },
  {
    "file_name": "animals_eagle_1.png",
    "word": "eagle"
  },
  {
    "file_name": "animals_elephant_1.png",
    "word": "elephant"
  },
  {
    "file_name": "animals_frog_1.png",
    "word": "frog"
  },
  {
    "file_name": "animals_gorilla_1.png",
    "word": "gorilla"
  },
  {
    "file_name": "animals_horse_1.png",
    "word": "horse"
  },
  {
    "file_name": "animals_koala_1.png",
    "word": "koala"
  },
  {
    "file_name": "animals_lion_1.png",
    "word": "lion"
  },
  {
    "file_name": "animals_monkey_1.png",
    "word": "monkey"
  },
  {
    "file_name": "animals_mouse_1.png",
    "word": "mouse"
  },
  {
    "file_name": "animals_panda_1.png",
    "word": "panda"
  },
  {
    "file_name": "animals_penguin_1.png",
    "word": "penguin"
  },
  {
    "file_name": "animals_pig_1.png",
    "word": "pig"
  },
  {
    "file_name": "animals_polarbear_1.png",
    "word": "polar bear"
  },
  {
    "file_name": "animals_rabbit_1.png",
    "word": "rabbit"
  },
  {
    "file_name": "animals_sheep_1.png",
    "word": "sheep"
  },
  {
    "file_name": "animals_snake_1.png",
    "word": "snake"
  },
  {
    "file_name": "animals_tiger_1.png",
    "word": "tiger"
  },
  {
    "file_name": "animals_zebra_1.png",
    "word": "zebra"
  },
  {
    "file_name": "annual-event_aprilfoolsday_1.png",
    "word": "April Fool's Day"
  },
  {
    "file_name": "annual-event_birthday_1.png",
    "word": "birthday"
  },
  {
    "file_name": "annual-event_childrensday_1.png",
    "word": "Children's Day"
  },
  {
    "file_name": "annual-event_christmas_1.png",
    "word": "Christmas"
  },
  {
    "file_name": "annual-event_dollsfestival_1.png",
    "word": "Dolls Festival"
  },
  {
    "file_name": "annual-event_fireworks_1.png",
    "word": "fireworks"
  },
  {
    "file_name": "annual-event_halloween_1.png",
    "word": "Halloween"
  },
  {
    "file_name": "annual-event_newyearsday_1.png",
    "word": "New Year's Day"
  },
  {
    "file_name": "annual-event_newyearseve_1.png",
    "word": "New Year's Eve"
  },
  {
    "file_name": "annual-event_starfestival_1.png",
    "word": "Star Festival"
  },
  {
    "file_name": "appearance_beautiful_1.png",
    "word": "beautiful"
  },
  {
    "file_name": "appearance_cool_1.png",
    "word": "cool"
  },
  {
    "file_name": "appearance_cute_1.png",
    "word": "cute"
  },
  {
    "file_name": "appearance_exciting_1.png",
    "word": "exciting"
  },
  {
    "file_name": "appearance_famous_1.png",
    "word": "famous"
  },
  {
    "file_name": "appearance_fantastic_1.png",
    "word": "fantastic"
  },
  {
    "file_name": "appearance_favorite_1.png",
    "word": "favorite"
  },
  {
    "file_name": "appearance_fun_1.png",
    "word": "fun"
  },
  {
    "file_name": "appearance_good_1.png",
    "word": "good"
  },
  {
    "file_name": "appearance_great_1.png",
    "word": "great"
  },
  {
    "file_name": "appearance_interesting_1.png",
    "word": "interesting"
  },
  {
    "file_name": "appearance_international_1.png",
    "word": "international"
  },
  {
    "file_name": "appearance_nice_1.png",
    "word": "nice"
  },
  {
    "file_name": "appearance_popular_1.png",
    "word": "popular"
  },
  {
    "file_name": "appearance_wonderful_1.png",
    "word": "wonderful"
  },
  {
    "file_name": "building_amusementpark_1.png",
    "word": "amusement park"
  },
  {
    "file_name": "building_aquarium_1.png",
    "word": "aquarium"
  },
  {
    "file_name": "building_bookstore_1.png",
    "word": "bookstore"
  },
  {
    "file_name": "building_bridge_1.png",
    "word": "bridge"
  },
  {
    "file_name": "building_busstop_1.png",
    "word": "bus stop"
  },
  {
    "file_name": "building_castle_1.png",
    "word": "castle"
  },
  {
    "file_name": "building_cityhall_1.png",
    "word": "city hall"
  },
  {
    "file_name": "building_conveniencestore_1.png",
    "word": "convenience store"
  },
  {
    "file_name": "building_departmentstore_1.png",
    "word": "department store"
  },
  {
    "file_name": "building_elementaryschool_1.png",
    "word": "elementary school"
  },
  {
    "file_name": "building_firestation_1.png",
    "word": "fire station"
  },
  {
    "file_name": "building_flowershop_1.png",
    "word": "flower shop"
  },
  {
    "file_name": "building_gasstation_1.png",
    "word": "gas station"
  },
  {
    "file_name": "building_hospital_1.png",
    "word": "hospital"
  },
  {
    "file_name": "building_house_1.png",
    "word": "house"
  },
  {
    "file_name": "building_juniorhighschool_1.png",
    "word": "junior high school"
  },
  {
    "file_name": "building_library_1.png",
    "word": "library"
  },
  {
    "file_name": "building_museum_1.png",
    "word": "museum"
  },
  {
    "file_name": "building_park_1.png",
    "word": "park"
  },
  {
    "file_name": "building_policestation_1.png",
    "word": "police station"
  },
  {
    "file_name": "building_postoffice_1.png",
    "word": "post office"
  },
  {
    "file_name": "building_restaurant_1.png",
    "word": "restaurant"
  },
  {
    "file_name": "building_shrine_1.png",
    "word": "shrine"
  },
  {
    "file_name": "building_stadium_1.png",
    "word": "stadium"
  },
  {
    "file_name": "building_station_1.png",
    "word": "station"
  },
  {
    "file_name": "building_street_1.png",
    "word": "street"
  },
  {
    "file_name": "building_supermarket_1.png",
    "word": "supermarket"
  },
  {
    "file_name": "building_temple_1.png",
    "word": "temple"
  },
  {
    "file_name": "building_zoo_1.png",
    "word": "zoo"
  },
  {
    "file_name": "character_active_1.png",
    "word": "active"
  },
  {
    "file_name": "character_brave_1.png",
    "word": "brave"
  },
  {
    "file_name": "character_friendly_1.png",
    "word": "friendly"
  },
  {
    "file_name": "character_funny_1.png",
    "word": "funny"
  },
  {
    "file_name": "character_gentle_1.png",
    "word": "gentle"
  },
  {
    "file_name": "character_kind_1.png",
    "word": "kind"
  },
  {
    "file_name": "character_strong_1.png",
    "word": "strong"
  },
  {
    "file_name": "clothing_cap_1.png",
    "word": "cap"
  },
  {
    "file_name": "clothing_gloves_1.png",
    "word": "gloves"
  },
  {
    "file_name": "clothing_hat_1.png",
    "word": "hat"
  },
  {
    "file_name": "clothing_pants_1.png",
    "word": "pants"
  },
  {
    "file_name": "clothing_shirt_1.png",
    "word": "shirt"
  },
  {
    "file_name": "clothing_socks_1.png",
    "word": "socks"
  },
  {
    "file_name": "clothing_sweater_1.png",
    "word": "sweater"
  },
  {
    "file_name": "clothing_t-shirt_1.png",
    "word": "T-shirt"
  },
  {
    "file_name": "clothing_uniform_1.png",
    "word": "uniform"
  },
  {
    "file_name": "clothing_vest_1.png",
    "word": "vest"
  },
  {
    "file_name": "club-activities_artclub_1.png",
    "word": "art club"
  },
  {
    "file_name": "club-activities_badmintonteam_1.png",
    "word": "badminton team"
  },
  {
    "file_name": "club-activities_baseballteam_1.png",
    "word": "baseball team"
  },
  {
    "file_name": "club-activities_basketballteam_1.png",
    "word": "basketball team"
  },
  {
    "file_name": "club-activities_brassband_1.png",
    "word": "brass band"
  },
  {
    "file_name": "club-activities_broadcastingclub_1.png",
    "word": "broadcasting club"
  },
  {
    "file_name": "club-activities_chorus_1.png",
    "word": "chorus"
  },
  {
    "file_name": "club-activities_cookingclub_1.png",
    "word": "cooking club"
  },
  {
    "file_name": "club-activities_dramaclub_1.png",
    "word": "drama club"
  },
  {
    "file_name": "club-activities_gymnasticsteam_1.png",
    "word": "gymnastics team"
  },
  {
    "file_name": "club-activities_newspaperclub_1.png",
    "word": "newspaper club"
  },
  {
    "file_name": "club-activities_photographyclub_1.png",
    "word": "photography club"
  },
  {
    "file_name": "club-activities_soccerteam_1.png",
    "word": "soccer team"
  },
  {
    "file_name": "club-activities_softballteam_1.png",
    "word": "softball team"
  },
  {
    "file_name": "club-activities_tabletennisteam_1.png",
    "word": "table tennis team"
  },
  {
    "file_name": "club-activities_tennisteam_1.png",
    "word": "tennis team"
  },
  {
    "file_name": "club-activities_trackandfieldteam_1.png",
    "word": "track and field team"
  },
  {
    "file_name": "club-activities_volleyballteam_1.png",
    "word": "volleyball team"
  },
  {
    "file_name": "color_black_1.png",
    "word": "black"
  },
  {
    "file_name": "color_blue_1.png",
    "word": "blue"
  },
  {
    "file_name": "color_brown_1.png",
    "word": "brown"
  },
  {
    "file_name": "color_green_1.png",
    "word": "green"
  },
  {
    "file_name": "color_orange_1.png",
    "word": "orange"
  },
  {
    "file_name": "color_pink_1.png",
    "word": "pink"
  },
  {
    "file_name": "color_purple_1.png",
    "word": "purple"
  },
  {
    "file_name": "color_red_1.png",
    "word": "red"
  },
  {
    "file_name": "color_white_1.png",
    "word": "white"
  },
  {
    "file_name": "color_yellow_1.png",
    "word": "yellow"
  },
  {
    "file_name": "countrys_america_1.png",
    "word": "America"
  },
  {
    "file_name": "countrys_australia_1.png",
    "word": "Australia"
  },
  {
    "file_name": "countrys_brazil_1.png",
    "word": "Brazil"
  },
  {
    "file_name": "countrys_canada_1.png",
    "word": "Canada"
  },
  {
    "file_name": "countrys_china_1.png",
    "word": "China"
  },
  {
    "file_name": "countrys_egypt_1.png",
    "word": "Egypt"
  },
  {
    "file_name": "countrys_france_1.png",
    "word": "France"
  },
  {
    "file_name": "countrys_germany_1.png",
    "word": "Germany"
  },
  {
    "file_name": "countrys_ghana_1.png",
    "word": "Ghana"
  },
  {
    "file_name": "countrys_india_1.png",
    "word": "India"
  },
  {
    "file_name": "countrys_italy_1.png",
    "word": "Italy"
  },
  {
    "file_name": "countrys_japan_1.png",
    "word": "Japan"
  },
  {
    "file_name": "countrys_kenya_1.png",
    "word": "Kenya"
  },
  {
    "file_name": "countrys_korea_1.png",
    "word": "Korea"
  },
  {
    "file_name": "countrys_mongolia_1.png",
    "word": "Mongolia"
  },
  {
    "file_name": "countrys_morocco_1.png",
    "word": "Morocco"
  },
  {
    "file_name": "countrys_norway_1.png",
    "word": "Norway"
  },
  {
    "file_name": "countrys_peru_1.png",
    "word": "Peru"
  },
  {
    "file_name": "countrys_russia_1.png",
    "word": "Russia"
  },
  {
    "file_name": "countrys_singapore_1.png",
    "word": "Singapore"
  },
  {
    "file_name": "countrys_spain_1.png",
    "word": "Spain"
  },
  {
    "file_name": "countrys_sweden_1.png",
    "word": "Sweden"
  },
  {
    "file_name": "countrys_thailand_1.png",
    "word": "Thailand"
  },
  {
    "file_name": "countrys_turkey_1.png",
    "word": "Turkey"
  },
  {
    "file_name": "countrys_uk_1.png",
    "word": "U.K."
  },
  {
    "file_name": "countrys_vietnam_1.png",
    "word": "Vietnam"
  },
  {
    "file_name": "daily-life_brushmyteeth_1.png",
    "word": "brush my teeth"
  },
  {
    "file_name": "daily-life_domyhomework_1.png",
    "word": "do my homework"
  },
  {
    "file_name": "daily-life_getthenewspaper_1.png",
    "word": "get the newspaper"
  },
  {
    "file_name": "daily-life_getup_1.png",
    "word": "get up"
  },
  {
    "file_name": "daily-life_gohome_1.png",
    "word": "go home"
  },
  {
    "file_name": "daily-life_gotobed_1.png",
    "word": "go to bed"
  },
  {
    "file_name": "daily-life_gotoschool_1.png",
    "word": "go to school"
  },
  {
    "file_name": "daily-life_havebreakfast_1.png",
    "word": "have breakfast"
  },
  {
    "file_name": "daily-life_havedinner_1.png",
    "word": "have dinner"
  },
  {
    "file_name": "daily-life_havelunch_1.png",
    "word": "have lunch"
  },
  {
    "file_name": "daily-life_playsoccer_1.png",
    "word": "play soccer"
  },
  {
    "file_name": "daily-life_studyenglish_1.png",
    "word": "study English"
  },
  {
    "file_name": "daily-life_takeabath_1.png",
    "word": "take a bath"
  },
  {
    "file_name": "daily-life_takeoutthegarbage_1.png",
    "word": "take out the garbage"
  },
  {
    "file_name": "daily-life_walkmydog_1.png",
    "word": "walk my dog"
  },
  {
    "file_name": "daily-life_washthedishes_1.png",
    "word": "wash the dishes"
  },
  {
    "file_name": "daily-life_watchtv_1.png",
    "word": "watch tv"
  },
  {
    "file_name": "dates_eighteenth_1.png",
    "word": "eighteenth"
  },
  {
    "file_name": "dates_eighth_1.png",
    "word": "eighth"
  },
  {
    "file_name": "dates_eleventh_1.png",
    "word": "eleventh"
  },
  {
    "file_name": "dates_fifteenth_1.png",
    "word": "fifteenth"
  },
  {
    "file_name": "dates_fifth_1.png",
    "word": "fifth"
  },
  {
    "file_name": "dates_first_1.png",
    "word": "first"
  },
  {
    "file_name": "dates_fourteenth_1.png",
    "word": "fourteenth"
  },
  {
    "file_name": "dates_fourth_1.png",
    "word": "fourth"
  },
  {
    "file_name": "dates_nineteenth_1.png",
    "word": "nineteenth"
  },
  {
    "file_name": "dates_ninth_1.png",
    "word": "ninth"
  },
  {
    "file_name": "dates_second_1.png",
    "word": "second"
  },
  {
    "file_name": "dates_seventeenth_1.png",
    "word": "seventeenth"
  },
  {
    "file_name": "dates_seventh_1.png",
    "word": "seventh"
  },
  {
    "file_name": "dates_sixteenth_1.png",
    "word": "sixteenth"
  },
  {
    "file_name": "dates_sixth_1.png",
    "word": "sixth"
  },
  {
    "file_name": "dates_tenth_1.png",
    "word": "tenth"
  },
  {
    "file_name": "dates_third_1.png",
    "word": "third"
  },
  {
    "file_name": "dates_thirteenth_1.png",
    "word": "thirteenth"
  },
  {
    "file_name": "dates_thirtieth_1.png",
    "word": "thirtieth"
  },
  {
    "file_name": "dates_thirty-first_1.png",
    "word": "thirty-first"
  },
  {
    "file_name": "dates_twelfth_1.png",
    "word": "twelfth"
  },
  {
    "file_name": "dates_twentieth_1.png",
    "word": "twentieth"
  },
  {
    "file_name": "dates_twenty-eighth_1.png",
    "word": "twenty-eighth"
  },
  {
    "file_name": "dates_twenty-fifth_1.png",
    "word": "twenty-fifth"
  },
  {
    "file_name": "dates_twenty-first_1.png",
    "word": "twenty-first"
  },
  {
    "file_name": "dates_twenty-fourth_1.png",
    "word": "twenty-fourth"
  },
  {
    "file_name": "dates_twenty-ninth_1.png",
    "word": "twenty-ninth"
  },
  {
    "file_name": "dates_twenty-second_1.png",
    "word": "twenty-second"
  },
  {
    "file_name": "dates_twenty-seventh_1.png",
    "word": "twenty-seventh"
  },
  {
    "file_name": "dates_twenty-sixth_1.png",
    "word": "twenty-sixth"
  },
  {
    "file_name": "dates_twenty-third_1.png",
    "word": "twenty-third"
  },
  {
    "file_name": "day-of-the-week_friday_1.png",
    "word": "Friday"
  },
  {
    "file_name": "day-of-the-week_monday_1.png",
    "word": "Monday"
  },
  {
    "file_name": "day-of-the-week_saturday_1.png",
    "word": "Saturday"
  },
  {
    "file_name": "day-of-the-week_sunday_1.png",
    "word": "Sunday"
  },
  {
    "file_name": "day-of-the-week_thursday_1.png",
    "word": "Thursday"
  },
  {
    "file_name": "day-of-the-week_tuesday_1.png",
    "word": "Tuesday"
  },
  {
    "file_name": "day-of-the-week_wednesday_1.png",
    "word": "Wednesday"
  },
  {
    "file_name": "dessert_cake_1.png",
    "word": "cake"
  },
  {
    "file_name": "dessert_chocolate_1.png",
    "word": "chocolate"
  },
  {
    "file_name": "dessert_icecream_1.png",
    "word": "ice cream"
  },
  {
    "file_name": "dessert_parfait_1.png",
    "word": "parfait"
  },
  {
    "file_name": "dessert_popcorn_1.png",
    "word": "popcorn"
  },
  {
    "file_name": "dessert_pudding_1.png",
    "word": "pudding"
  },
  {
    "file_name": "dessert_shavedice_1.png",
    "word": "shaved ice"
  },
  {
    "file_name": "dessert_snackfood_1.png",
    "word": "snack food"
  },
  {
    "file_name": "drinks_coffee_1.png",
    "word": "coffee"
  },
  {
    "file_name": "drinks_greentea_1.png",
    "word": "green tea"
  },
  {
    "file_name": "drinks_juice_1.png",
    "word": "juice"
  },
  {
    "file_name": "drinks_milk_1.png",
    "word": "milk"
  },
  {
    "file_name": "drinks_mineralwater_1.png",
    "word": "mineral water"
  },
  {
    "file_name": "drinks_soda_1.png",
    "word": "soda"
  },
  {
    "file_name": "drinks_tea_1.png",
    "word": "tea"
  },
  {
    "file_name": "drinks_water_1.png",
    "word": "water"
  },
  {
    "file_name": "everyday-life_bag_1.png",
    "word": "bag"
  },
  {
    "file_name": "everyday-life_ball_1.png",
    "word": "ball"
  },
  {
    "file_name": "everyday-life_basket_1.png",
    "word": "basket"
  },
  {
    "file_name": "everyday-life_bath_1.png",
    "word": "bath"
  },
  {
    "file_name": "everyday-life_bat_1.png",
    "word": "bat"
  },
  {
    "file_name": "everyday-life_bed_1.png",
    "word": "bed"
  },
  {
    "file_name": "everyday-life_book_1.png",
    "word": "book"
  },
  {
    "file_name": "everyday-life_box_1.png",
    "word": "box"
  },
  {
    "file_name": "everyday-life_calendar_1.png",
    "word": "calendar"
  },
  {
    "file_name": "everyday-life_chair_1.png",
    "word": "chair"
  },
  {
    "file_name": "everyday-life_clock_1.png",
    "word": "clock"
  },
  {
    "file_name": "everyday-life_comicbook_1.png",
    "word": "comic book"
  },
  {
    "file_name": "everyday-life_computer_1.png",
    "word": "computer"
  },
  {
    "file_name": "everyday-life_cup_1.png",
    "word": "cup"
  },
  {
    "file_name": "everyday-life_desk_1.png",
    "word": "desk"
  },
  {
    "file_name": "everyday-life_map_1.png",
    "word": "map"
  },
  {
    "file_name": "everyday-life_picture_1.png",
    "word": "picture"
  },
  {
    "file_name": "everyday-life_plasticbag_1.png",
    "word": "plastic bag"
  },
  {
    "file_name": "everyday-life_present_1.png",
    "word": "present"
  },
  {
    "file_name": "everyday-life_racket_1.png",
    "word": "racket"
  },
  {
    "file_name": "everyday-life_table_1.png",
    "word": "table"
  },
  {
    "file_name": "everyday-life_textbook_1.png",
    "word": "textbook"
  },
  {
    "file_name": "everyday-life_treasure_1.png",
    "word": "treasure"
  },
  {
    "file_name": "everyday-life_umbrella_1.png",
    "word": "umbrella"
  },
  {
    "file_name": "everyday-life_wall_1.png",
    "word": "wall"
  },
  {
    "file_name": "everyday-life_watch_1.png",
    "word": "watch"
  },
  {
    "file_name": "everyday-life_wheelchair_1.png",
    "word": "wheelchair"
  },
  {
    "file_name": "everyday-life_window_1.png",
    "word": "window"
  },
  {
    "file_name": "family_brother_1.png",
    "word": "brother"
  },
  {
    "file_name": "family_father_1.png",
    "word": "father"
  },
  {
    "file_name": "family_grandfather_1.png",
    "word": "grandfather"
  },
  {
    "file_name": "family_grandmother_1.png",
    "word": "grandmother"
  },
  {
    "file_name": "family_me_1.png",
    "word": "me"
  },
  {
    "file_name": "family_mother_1.png",
    "word": "mother"
  },
  {
    "file_name": "family_sister_1.png",
    "word": "sister"
  },
  {
    "file_name": "feel_busy_1.png",
    "word": "busy"
  },
  {
    "file_name": "feel_fine_1.png",
    "word": "fine"
  },
  {
    "file_name": "feel_good_1.png",
    "word": "good"
  },
  {
    "file_name": "feel_great_1.png",
    "word": "great"
  },
  {
    "file_name": "feel_happy_1.png",
    "word": "happy"
  },
  {
    "file_name": "feel_hungry_1.png",
    "word": "hungry"
  },
  {
    "file_name": "feel_sad_1.png",
    "word": "sad"
  },
  {
    "file_name": "feel_sleepy_1.png",
    "word": "sleepy"
  },
  {
    "file_name": "feel_thirsty_1.png",
    "word": "thirsty"
  },
  {
    "file_name": "feel_tired_1.png",
    "word": "tired"
  },
  {
    "file_name": "foodstuff_bacon_1.png",
    "word": "bacon"
  },
  {
    "file_name": "foodstuff_beef_1.png",
    "word": "beef"
  },
  {
    "file_name": "foodstuff_cheese_1.png",
    "word": "cheese"
  },
  {
    "file_name": "foodstuff_chicken_1.png",
    "word": "chicken"
  },
  {
    "file_name": "foodstuff_egg_1.png",
    "word": "egg"
  },
  {
    "file_name": "foodstuff_fish_1.png",
    "word": "fish"
  },
  {
    "file_name": "foodstuff_ham_1.png",
    "word": "ham"
  },
  {
    "file_name": "foodstuff_octopus_1.png",
    "word": "octopus"
  },
  {
    "file_name": "foodstuff_pork_1.png",
    "word": "pork"
  },
  {
    "file_name": "foodstuff_salmon_1.png",
    "word": "salmon"
  },
  {
    "file_name": "foods_bread_1.png",
    "word": "bread"
  },
  {
    "file_name": "foods_curryandrice_1.png",
    "word": "curry and rice"
  },
  {
    "file_name": "foods_frenchfries_1.png",
    "word": "french fries"
  },
  {
    "file_name": "foods_friedchicken_1.png",
    "word": "fried chicken"
  },
  {
    "file_name": "foods_grilledfish_1.png",
    "word": "grilled fish"
  },
  {
    "file_name": "foods_hamburger_1.png",
    "word": "hamburger"
  },
  {
    "file_name": "foods_hotdog_1.png",
    "word": "hot dog"
  },
  {
    "file_name": "foods_omelet_1.png",
    "word": "omelet"
  },
  {
    "file_name": "foods_pancakes_1.png",
    "word": "pancakes"
  },
  {
    "file_name": "foods_pie_1.png",
    "word": "pie"
  },
  {
    "file_name": "foods_pizza_1.png",
    "word": "pizza"
  },
  {
    "file_name": "foods_riceball_1.png",
    "word": "rice ball"
  },
  {
    "file_name": "foods_rice_1.png",
    "word": "rice"
  },
  {
    "file_name": "foods_salad_1.png",
    "word": "salad"
  },
  {
    "file_name": "foods_sandwich_1.png",
    "word": "sandwich"
  },
  {
    "file_name": "foods_sausage_1.png",
    "word": "sausage"
  },
  {
    "file_name": "foods_soup_1.png",
    "word": "soup"
  },
  {
    "file_name": "foods_spaghetti_1.png",
    "word": "spaghetti"
  },
  {
    "file_name": "foods_steak_1.png",
    "word": "steak"
  },
  {
    "file_name": "frequency_always_1.png",
    "word": "always"
  },
  {
    "file_name": "frequency_never_1.png",
    "word": "never"
  },
  {
    "file_name": "frequency_sometimes_1.png",
    "word": "sometimes"
  },
  {
    "file_name": "frequency_usually_1.png",
    "word": "usually"
  },
  {
    "file_name": "fruits-vegetables_apple_1.png",
    "word": "apple"
  },
  {
    "file_name": "fruits-vegetables_banana_1.png",
    "word": "banana"
  },
  {
    "file_name": "fruits-vegetables_bean_1.png",
    "word": "bean"
  },
  {
    "file_name": "fruits-vegetables_broccoli_1.png",
    "word": "broccoli"
  },
  {
    "file_name": "fruits-vegetables_cabbage_1.png",
    "word": "cabbage"
  },
  {
    "file_name": "fruits-vegetables_carrot_1.png",
    "word": "carrot"
  },
  {
    "file_name": "fruits-vegetables_cherry_1.png",
    "word": "cherry"
  },
  {
    "file_name": "fruits-vegetables_corn_1.png",
    "word": "corn"
  },
  {
    "file_name": "fruits-vegetables_cucumber_1.png",
    "word": "cucumber"
  },
  {
    "file_name": "fruits-vegetables_eggplant_1.png",
    "word": "eggplant"
  },
  {
    "file_name": "fruits-vegetables_grapes_1.png",
    "word": "grapes"
  },
  {
    "file_name": "fruits-vegetables_greenpepper_1.png",
    "word": "green pepper"
  },
  {
    "file_name": "fruits-vegetables_kiwifruit_1.png",
    "word": "kiwi fruit"
  },
  {
    "file_name": "fruits-vegetables_lemon_1.png",
    "word": "lemon"
  },
  {
    "file_name": "fruits-vegetables_lettuce_1.png",
    "word": "lettuce"
  },
  {
    "file_name": "fruits-vegetables_melon_1.png",
    "word": "melon"
  },
  {
    "file_name": "fruits-vegetables_mushroom_1.png",
    "word": "mushroom"
  },
  {
    "file_name": "fruits-vegetables_nut_1.png",
    "word": "nut"
  },
  {
    "file_name": "fruits-vegetables_onion_1.png",
    "word": "onion"
  },
  {
    "file_name": "fruits-vegetables_orange_1.png",
    "word": "orange"
  },
  {
    "file_name": "fruits-vegetables_peach_1.png",
    "word": "peach"
  },
  {
    "file_name": "fruits-vegetables_pineapple_1.png",
    "word": "pineapple"
  },
  {
    "file_name": "fruits-vegetables_potato_1.png",
    "word": "potato"
  },
  {
    "file_name": "fruits-vegetables_spinach_1.png",
    "word": "spinach"
  },
  {
    "file_name": "fruits-vegetables_strawberry_1.png",
    "word": "strawberry"
  },
  {
    "file_name": "fruits-vegetables_tomato_1.png",
    "word": "tomato"
  },
  {
    "file_name": "fruits-vegetables_watermelon_1.png",
    "word": "watermelon"
  },
  {
    "file_name": "games_camping_1.png",
    "word": "camping"
  },
  {
    "file_name": "games_cards_1.png",
    "word": "cards"
  },
  {
    "file_name": "games_fishing_1.png",
    "word": "fishing"
  },
  {
    "file_name": "games_hiking_1.png",
    "word": "hiking"
  },
  {
    "file_name": "games_jogging_1.png",
    "word": "jogging"
  },
  {
    "file_name": "games_jumprope_1.png",
    "word": "jump rope"
  },
  {
    "file_name": "games_kiteflying_1.png",
    "word": "kite flying"
  },
  {
    "file_name": "games_reading_1.png",
    "word": "reading"
  },
  {
    "file_name": "games_rockpaperscissors_1.png",
    "word": "rock, paper, scissors"
  },
  {
    "file_name": "games_running_1.png",
    "word": "running"
  },
  {
    "file_name": "games_shopping_1.png",
    "word": "shopping"
  },
  {
    "file_name": "games_tag_1.png",
    "word": "tag"
  },
  {
    "file_name": "games_topspinning_1.png",
    "word": "top spinning"
  },
  {
    "file_name": "games_unicycle_1.png",
    "word": "unicycle"
  },
  {
    "file_name": "human-body_ear_1.png",
    "word": "ear"
  },
  {
    "file_name": "human-body_eye_1.png",
    "word": "eye"
  },
  {
    "file_name": "human-body_face_1.png",
    "word": "face"
  },
  {
    "file_name": "human-body_hand_1.png",
    "word": "hand"
  },
  {
    "file_name": "human-body_head_1.png",
    "word": "head"
  },
  {
    "file_name": "human-body_knee_1.png",
    "word": "knee"
  },
  {
    "file_name": "human-body_leg_1.png",
    "word": "leg"
  },
  {
    "file_name": "human-body_mouth_1.png",
    "word": "mouth"
  },
  {
    "file_name": "human-body_nose_1.png",
    "word": "nose"
  },
  {
    "file_name": "human-body_shoulder_1.png",
    "word": "shoulder"
  },
  {
    "file_name": "human-body_teeth_1.png",
    "word": "teeth"
  },
  {
    "file_name": "human-body_toe_1.png",
    "word": "toe"
  },
  {
    "file_name": "human_boy_1.png",
    "word": "boy"
  },
  {
    "file_name": "human_classmates_1.png",
    "word": "classmates"
  },
  {
    "file_name": "human_friends_1.png",
    "word": "friends"
  },
  {
    "file_name": "human_girl_1.png",
    "word": "girl"
  },
  {
    "file_name": "insect_ant_1.png",
    "word": "ant"
  },
  {
    "file_name": "insect_butterfly_1.png",
    "word": "butterfly"
  },
  {
    "file_name": "insect_grasshopper_1.png",
    "word": "grasshopper"
  },
  {
    "file_name": "insect_spider_1.png",
    "word": "spider"
  },
  {
    "file_name": "meal_breakfast_1.png",
    "word": "breakfast"
  },
  {
    "file_name": "meal_dinner_1.png",
    "word": "dinner"
  },
  {
    "file_name": "meal_lunch_1.png",
    "word": "lunch"
  },
  {
    "file_name": "month_april_1.png",
    "word": "April"
  },
  {
    "file_name": "month_august_1.png",
    "word": "August"
  },
  {
    "file_name": "month_december_1.png",
    "word": "December"
  },
  {
    "file_name": "month_february_1.png",
    "word": "February"
  },
  {
    "file_name": "month_january_1.png",
    "word": "January"
  },
  {
    "file_name": "month_july_1.png",
    "word": "July"
  },
  {
    "file_name": "month_june_1.png",
    "word": "June"
  },
  {
    "file_name": "month_march_1.png",
    "word": "March"
  },
  {
    "file_name": "month_may_1.png",
    "word": "May"
  },
  {
    "file_name": "month_november_1.png",
    "word": "November"
  },
  {
    "file_name": "month_october_1.png",
    "word": "October"
  },
  {
    "file_name": "month_september_1.png",
    "word": "September"
  },
  {
    "file_name": "motion2_enjoy_1.png",
    "word": "enjoy"
  },
  {
    "file_name": "motion2_get_1.png",
    "word": "get"
  },
  {
    "file_name": "motion2_have_1.png",
    "word": "have"
  },
  {
    "file_name": "motion2_help_1.png",
    "word": "help"
  },
  {
    "file_name": "motion2_join_1.png",
    "word": "join"
  },
  {
    "file_name": "motion2_like_1.png",
    "word": "like"
  },
  {
    "file_name": "motion2_live_1.png",
    "word": "live"
  },
  {
    "file_name": "motion2_look_1.png",
    "word": "look"
  },
  {
    "file_name": "motion2_make_1.png",
    "word": "make"
  },
  {
    "file_name": "motion2_play_1.png",
    "word": "play"
  },
  {
    "file_name": "motion2_practice_1.png",
    "word": "practice"
  },
  {
    "file_name": "motion2_see_1.png",
    "word": "see"
  },
  {
    "file_name": "motion2_think_1.png",
    "word": "think"
  },
  {
    "file_name": "motion2_try_1.png",
    "word": "try"
  },
  {
    "file_name": "motion2_want_1.png",
    "word": "want"
  },
  {
    "file_name": "motion_bake_1.png",
    "word": "bake"
  },
  {
    "file_name": "motion_buy_1.png",
    "word": "buy"
  },
  {
    "file_name": "motion_clean_1.png",
    "word": "clean"
  },
  {
    "file_name": "motion_cook_1.png",
    "word": "cook"
  },
  {
    "file_name": "motion_dance_1.png",
    "word": "dance"
  },
  {
    "file_name": "motion_draw_1.png",
    "word": "draw"
  },
  {
    "file_name": "motion_drink_1.png",
    "word": "drink"
  },
  {
    "file_name": "motion_eat_1.png",
    "word": "eat"
  },
  {
    "file_name": "motion_go_1.png",
    "word": "go"
  },
  {
    "file_name": "motion_jump_1.png",
    "word": "jump"
  },
  {
    "file_name": "motion_listen_1.png",
    "word": "listen"
  },
  {
    "file_name": "motion_read_1.png",
    "word": "read"
  },
  {
    "file_name": "motion_ride_1.png",
    "word": "ride"
  },
  {
    "file_name": "motion_run_1.png",
    "word": "run"
  },
  {
    "file_name": "motion_sing_1.png",
    "word": "sing"
  },
  {
    "file_name": "motion_skate_1.png",
    "word": "skate"
  },
  {
    "file_name": "motion_speak_1.png",
    "word": "speak"
  },
  {
    "file_name": "motion_stop_1.png",
    "word": "stop"
  },
  {
    "file_name": "motion_study_1.png",
    "word": "study"
  },
  {
    "file_name": "motion_swim_1.png",
    "word": "swim"
  },
  {
    "file_name": "motion_talk_1.png",
    "word": "talk"
  },
  {
    "file_name": "motion_teach_1.png",
    "word": "teach"
  },
  {
    "file_name": "motion_travel_1.png",
    "word": "travel"
  },
  {
    "file_name": "motion_turn_1.png",
    "word": "turn"
  },
  {
    "file_name": "motion_write_1.png",
    "word": "write"
  },
  {
    "file_name": "musical-instrument_drum_1.png",
    "word": "drum"
  },
  {
    "file_name": "musical-instrument_guitar_1.png",
    "word": "guitar"
  },
  {
    "file_name": "musical-instrument_harmonica_1.png",
    "word": "harmonica"
  },
  {
    "file_name": "musical-instrument_piano_1.png",
    "word": "piano"
  },
  {
    "file_name": "musical-instrument_recorder_1.png",
    "word": "recorder"
  },
  {
    "file_name": "musical-instrument_triangle_1.png",
    "word": "triangle"
  },
  {
    "file_name": "musical-instrument_violin_1.png",
    "word": "violin"
  },
  {
    "file_name": "musical-instrument_xylophone_1.png",
    "word": "xylophone"
  },
  {
    "file_name": "natures_desert_1.png",
    "word": "desert"
  },
  {
    "file_name": "natures_flower_1.png",
    "word": "flower"
  },
  {
    "file_name": "natures_forest_1.png",
    "word": "forest"
  },
  {
    "file_name": "natures_island_1.png",
    "word": "island"
  },
  {
    "file_name": "natures_lake_1.png",
    "word": "lake"
  },
  {
    "file_name": "natures_mountain_1.png",
    "word": "mountain"
  },
  {
    "file_name": "natures_pond_1.png",
    "word": "pond"
  },
  {
    "file_name": "natures_river_1.png",
    "word": "river"
  },
  {
    "file_name": "natures_savanna_1.png",
    "word": "savanna"
  },
  {
    "file_name": "natures_sea_1.png",
    "word": "sea"
  },
  {
    "file_name": "natures_tree_1.png",
    "word": "tree"
  },
  {
    "file_name": "natures_wetlands_1.png",
    "word": "wetlands"
  },
  {
    "file_name": "number_eighteen_1.png",
    "word": "eighteen"
  },
  {
    "file_name": "number_eighty_1.png",
    "word": "eighty"
  },
  {
    "file_name": "number_eight_1.png",
    "word": "eight"
  },
  {
    "file_name": "number_eleven_1.png",
    "word": "eleven"
  },
  {
    "file_name": "number_fifteen_1.png",
    "word": "fifteen"
  },
  {
    "file_name": "number_fifty_1.png",
    "word": "fifty"
  },
  {
    "file_name": "number_five_1.png",
    "word": "five"
  },
  {
    "file_name": "number_forty_1.png",
    "word": "forty"
  },
  {
    "file_name": "number_fourteen_1.png",
    "word": "fourteen"
  },
  {
    "file_name": "number_four_1.png",
    "word": "four"
  },
  {
    "file_name": "number_nineteen_1.png",
    "word": "nineteen"
  },
  {
    "file_name": "number_ninety_1.png",
    "word": "ninety"
  },
  {
    "file_name": "number_nine_1.png",
    "word": "nine"
  },
  {
    "file_name": "number_onehundred_1.png",
    "word": "one hundred"
  },
  {
    "file_name": "number_one_1.png",
    "word": "one"
  },
  {
    "file_name": "number_seventeen_1.png",
    "word": "seventeen"
  },
  {
    "file_name": "number_seventy_1.png",
    "word": "seventy"
  },
  {
    "file_name": "number_seven_1.png",
    "word": "seven"
  },
  {
    "file_name": "number_sixteen_1.png",
    "word": "sixteen"
  },
  {
    "file_name": "number_sixty_1.png",
    "word": "sixty"
  },
  {
    "file_name": "number_six_1.png",
    "word": "six"
  },
  {
    "file_name": "number_ten_1.png",
    "word": "ten"
  },
  {
    "file_name": "number_thirteen_1.png",
    "word": "thirteen"
  },
  {
    "file_name": "number_thirty_1.png",
    "word": "thirty"
  },
  {
    "file_name": "number_three_1.png",
    "word": "three"
  },
  {
    "file_name": "number_twelve_1.png",
    "word": "twelve"
  },
  {
    "file_name": "number_twenty-eight_1.png",
    "word": "twenty-eight"
  },
  {
    "file_name": "number_twenty-five_1.png",
    "word": "twenty-five"
  },
  {
    "file_name": "number_twenty-four_1.png",
    "word": "twenty-four"
  },
  {
    "file_name": "number_twenty-nine_1.png",
    "word": "twenty-nine"
  },
  {
    "file_name": "number_twenty-one_1.png",
    "word": "twenty-one"
  },
  {
    "file_name": "number_twenty-seven_1.png",
    "word": "twenty-seven"
  },
  {
    "file_name": "number_twenty-six_1.png",
    "word": "twenty-six"
  },
  {
    "file_name": "number_twenty-three_1.png",
    "word": "twenty-three"
  },
  {
    "file_name": "number_twenty-two_1.png",
    "word": "twenty-two"
  },
  {
    "file_name": "number_twenty_1.png",
    "word": "twenty"
  },
  {
    "file_name": "number_two_1.png",
    "word": "two"
  },
  {
    "file_name": "number_zero_1.png",
    "word": "zero"
  },
  {
    "file_name": "occupation_artist_1.png",
    "word": "artist"
  },
  {
    "file_name": "occupation_astronaut_1.png",
    "word": "astronaut"
  },
  {
    "file_name": "occupation_baker_1.png",
    "word": "baker"
  },
  {
    "file_name": "occupation_baseballplayer_1.png",
    "word": "baseball player"
  },
  {
    "file_name": "occupation_busdriver_1.png",
    "word": "bus driver"
  },
  {
    "file_name": "occupation_comedian_1.png",
    "word": "comedian"
  },
  {
    "file_name": "occupation_cook_1.png",
    "word": "cook"
  },
  {
    "file_name": "occupation_dentist_1.png",
    "word": "dentist"
  },
  {
    "file_name": "occupation_doctor_1.png",
    "word": "doctor"
  },
  {
    "file_name": "occupation_farmer_1.png",
    "word": "farmer"
  },
  {
    "file_name": "occupation_figureskater_1.png",
    "word": "figure skater"
  },
  {
    "file_name": "occupation_firefighter_1.png",
    "word": "fire fighter"
  },
  {
    "file_name": "occupation_flightattendant_1.png",
    "word": "flight attendant"
  },
  {
    "file_name": "occupation_florist_1.png",
    "word": "florist"
  },
  {
    "file_name": "occupation_musician_1.png",
    "word": "musician"
  },
  {
    "file_name": "occupation_nurse_1.png",
    "word": "nurse"
  },
  {
    "file_name": "occupation_pilot_1.png",
    "word": "pilot"
  },
  {
    "file_name": "occupation_policeofficer_1.png",
    "word": "police officer"
  },
  {
    "file_name": "occupation_programmer_1.png",
    "word": "programmer"
  },
  {
    "file_name": "occupation_scientist_1.png",
    "word": "scientist"
  },
  {
    "file_name": "occupation_singer_1.png",
    "word": "singer"
  },
  {
    "file_name": "occupation_soccerplayer_1.png",
    "word": "soccer player"
  },
  {
    "file_name": "occupation_teacher_1.png",
    "word": "teacher"
  },
  {
    "file_name": "occupation_vet_1.png",
    "word": "vet"
  },
  {
    "file_name": "occupation_zookeeper_1.png",
    "word": "zookeeper"
  },
  {
    "file_name": "positions_by_1.png",
    "word": "by"
  },
  {
    "file_name": "positions_in_1.png",
    "word": "in"
  },
  {
    "file_name": "positions_on_1.png",
    "word": "on"
  },
  {
    "file_name": "positions_under_1.png",
    "word": "under"
  },
  {
    "file_name": "route-guidance_block_1.png",
    "word": "block"
  },
  {
    "file_name": "route-guidance_go_1.png",
    "word": "go"
  },
  {
    "file_name": "route-guidance_left_1.png",
    "word": "left"
  },
  {
    "file_name": "route-guidance_right_1.png",
    "word": "right"
  },
  {
    "file_name": "route-guidance_see_1.png",
    "word": "see"
  },
  {
    "file_name": "route-guidance_straight_1.png",
    "word": "straight"
  },
  {
    "file_name": "route-guidance_turn_1.png",
    "word": "turn"
  },
  {
    "file_name": "school-event_choruscontest_1.png",
    "word": "chorus contest"
  },
  {
    "file_name": "school-event_dramafestival_1.png",
    "word": "drama festival"
  },
  {
    "file_name": "school-event_entranceceremony_1.png",
    "word": "entrance ceremony"
  },
  {
    "file_name": "school-event_fieldtrip_1.png",
    "word": "field trip"
  },
  {
    "file_name": "school-event_firedrill_1.png",
    "word": "fire drill"
  },
  {
    "file_name": "school-event_graduationceremony_1.png",
    "word": "graduation ceremony"
  },
  {
    "file_name": "school-event_musicfestival_1.png",
    "word": "music festival"
  },
  {
    "file_name": "school-event_schoolfestival_1.png",
    "word": "school festival"
  },
  {
    "file_name": "school-event_schooltrip_1.png",
    "word": "school trip"
  },
  {
    "file_name": "school-event_sportsday_1.png",
    "word": "sports day"
  },
  {
    "file_name": "school-event_summervacation_1.png",
    "word": "summer vacation"
  },
  {
    "file_name": "school-event_swimmingmeet_1.png",
    "word": "swimming meet"
  },
  {
    "file_name": "school-event_volunteerday_1.png",
    "word": "volunteer day"
  },
  {
    "file_name": "school_classroom_1.png",
    "word": "classroom"
  },
  {
    "file_name": "school_entrance_1.png",
    "word": "entrance"
  },
  {
    "file_name": "school_gym_1.png",
    "word": "gym"
  },
  {
    "file_name": "school_library_1.png",
    "word": "library"
  },
  {
    "file_name": "school_musicroom_1.png",
    "word": "music room"
  },
  {
    "file_name": "school_playground_1.png",
    "word": "playground"
  },
  {
    "file_name": "school_restroom_1.png",
    "word": "restroom"
  },
  {
    "file_name": "school_schoolnursesoffice_1.png",
    "word": "school nurse's office"
  },
  {
    "file_name": "school_schoolprincipalsoffice_1.png",
    "word": "school principal's office"
  },
  {
    "file_name": "school_swimmingpool_1.png",
    "word": "swimming pool"
  },
  {
    "file_name": "school_teachersoffice_1.png",
    "word": "teacher's office"
  },
  {
    "file_name": "sea-creatures_dolphin_1.png",
    "word": "dolphin"
  },
  {
    "file_name": "sea-creatures_fish_1.png",
    "word": "fish"
  },
  {
    "file_name": "sea-creatures_jellyfish_1.png",
    "word": "jellyfish"
  },
  {
    "file_name": "sea-creatures_seaturtle_1.png",
    "word": "sea turtle"
  },
  {
    "file_name": "sea-creatures_shark_1.png",
    "word": "shark"
  },
  {
    "file_name": "sea-creatures_shrimp_1.png",
    "word": "shrimp"
  },
  {
    "file_name": "sea-creatures_squid_1.png",
    "word": "squid"
  },
  {
    "file_name": "sea-creatures_whale_1.png",
    "word": "whale"
  },
  {
    "file_name": "season_fall_1.png",
    "word": "fall"
  },
  {
    "file_name": "season_spring_1.png",
    "word": "spring"
  },
  {
    "file_name": "season_summer_1.png",
    "word": "summer"
  },
  {
    "file_name": "season_winter_1.png",
    "word": "winter"
  },
  {
    "file_name": "shape_circle_1.png",
    "word": "circle"
  },
  {
    "file_name": "shape_cross_1.png",
    "word": "cross"
  },
  {
    "file_name": "shape_diamond_1.png",
    "word": "diamond"
  },
  {
    "file_name": "shape_heart_1.png",
    "word": "heart"
  },
  {
    "file_name": "shape_rectangle_1.png",
    "word": "rectangle"
  },
  {
    "file_name": "shape_square_1.png",
    "word": "square"
  },
  {
    "file_name": "shape_star_1.png",
    "word": "star"
  },
  {
    "file_name": "shape_triangle_1.png",
    "word": "triangle"
  },
  {
    "file_name": "sports_badminton_1.png",
    "word": "badminton"
  },
  {
    "file_name": "sports_baseball_1.png",
    "word": "baseball"
  },
  {
    "file_name": "sports_basketball_1.png",
    "word": "basketball"
  },
  {
    "file_name": "sports_dodgeball_1.png",
    "word": "dodgeball"
  },
  {
    "file_name": "sports_skating_1.png",
    "word": "skating"
  },
  {
    "file_name": "sports_skiing_1.png",
    "word": "skiing"
  },
  {
    "file_name": "sports_soccer_1.png",
    "word": "soccer"
  },
  {
    "file_name": "sports_softball_1.png",
    "word": "softball"
  },
  {
    "file_name": "sports_swimming_1.png",
    "word": "swimming"
  },
  {
    "file_name": "sports_tabletennis_1.png",
    "word": "table tennis"
  },
  {
    "file_name": "sports_tennis_1.png",
    "word": "tennis"
  },
  {
    "file_name": "sports_trackandfield_1.png",
    "word": "track and field"
  },
  {
    "file_name": "sports_volleyball_1.png",
    "word": "volleyball"
  },
  {
    "file_name": "stationery_crayon_1.png",
    "word": "crayon"
  },
  {
    "file_name": "stationery_eraser_1.png",
    "word": "eraser"
  },
  {
    "file_name": "stationery_glue_1.png",
    "word": "glue"
  },
  {
    "file_name": "stationery_marker_1.png",
    "word": "marker"
  },
  {
    "file_name": "stationery_notebook_1.png",
    "word": "notebook"
  },
  {
    "file_name": "stationery_pencilcase_1.png",
    "word": "pencil case"
  },
  {
    "file_name": "stationery_pencilsharpener_1.png",
    "word": "pencil sharpener"
  },
  {
    "file_name": "stationery_pencil_1.png",
    "word": "pencil"
  },
  {
    "file_name": "stationery_pen_1.png",
    "word": "pen"
  },
  {
    "file_name": "stationery_ruler_1.png",
    "word": "ruler"
  },
  {
    "file_name": "stationery_scissors_1.png",
    "word": "scissors"
  },
  {
    "file_name": "stationery_stapler_1.png",
    "word": "stapler"
  },
  {
    "file_name": "status_big_1.png",
    "word": "big"
  },
  {
    "file_name": "status_different_1.png",
    "word": "different"
  },
  {
    "file_name": "status_difficult_1.png",
    "word": "difficult"
  },
  {
    "file_name": "status_easy_1.png",
    "word": "easy"
  },
  {
    "file_name": "status_fast_1.png",
    "word": "fast"
  },
  {
    "file_name": "status_long_1.png",
    "word": "long"
  },
  {
    "file_name": "status_new_1.png",
    "word": "new"
  },
  {
    "file_name": "status_old_1.png",
    "word": "old"
  },
  {
    "file_name": "status_same_1.png",
    "word": "same"
  },
  {
    "file_name": "status_short_1.png",
    "word": "short"
  },
  {
    "file_name": "status_slow_1.png",
    "word": "slow"
  },
  {
    "file_name": "status_small_1.png",
    "word": "small"
  },
  {
    "file_name": "subjects_artsandcrafts_1.png",
    "word": "arts and crafts"
  },
  {
    "file_name": "subjects_calligraphy_1.png",
    "word": "calligraphy"
  },
  {
    "file_name": "subjects_english_1.png",
    "word": "English"
  },
  {
    "file_name": "subjects_homeeconomics_1.png",
    "word": "home economics"
  },
  {
    "file_name": "subjects_japanese_1.png",
    "word": "Japanese"
  },
  {
    "file_name": "subjects_math_1.png",
    "word": "math"
  },
  {
    "file_name": "subjects_moraleducation_1.png",
    "word": "moral education"
  },
  {
    "file_name": "subjects_music_1.png",
    "word": "music"
  },
  {
    "file_name": "subjects_pe_1.png",
    "word": "P.E."
  },
  {
    "file_name": "subjects_science_1.png",
    "word": "science"
  },
  {
    "file_name": "subjects_socialstudies_1.png",
    "word": "social studies"
  },
  {
    "file_name": "tastes_bitter_1.png",
    "word": "bitter"
  },
  {
    "file_name": "tastes_cold_1.png",
    "word": "cold"
  },
  {
    "file_name": "tastes_delicious_1.png",
    "word": "delicious"
  },
  {
    "file_name": "tastes_hard_1.png",
    "word": "hard"
  },
  {
    "file_name": "tastes_hot_1.png",
    "word": "hot"
  },
  {
    "file_name": "tastes_salty_1.png",
    "word": "salty"
  },
  {
    "file_name": "tastes_soft_1.png",
    "word": "soft"
  },
  {
    "file_name": "tastes_sour_1.png",
    "word": "sour"
  },
  {
    "file_name": "tastes_spicy_1.png",
    "word": "spicy"
  },
  {
    "file_name": "tastes_sweet_1.png",
    "word": "sweet"
  },
  {
    "file_name": "time-of-day_afternoon_1.png",
    "word": "afternoon"
  },
  {
    "file_name": "time-of-day_evening_1.png",
    "word": "evening"
  },
  {
    "file_name": "time-of-day_morning_1.png",
    "word": "morning"
  },
  {
    "file_name": "time-of-day_night_1.png",
    "word": "night"
  },
  {
    "file_name": "vehicle_airplane_1.png",
    "word": "airplane"
  },
  {
    "file_name": "vehicle_bike_1.png",
    "word": "bike"
  },
  {
    "file_name": "vehicle_boat_1.png",
    "word": "boat"
  },
  {
    "file_name": "vehicle_bus_1.png",
    "word": "bus"
  },
  {
    "file_name": "vehicle_car_1.png",
    "word": "car"
  },
  {
    "file_name": "vehicle_ship_1.png",
    "word": "ship"
  },
  {
    "file_name": "vehicle_subway_1.png",
    "word": "subway"
  },
  {
    "file_name": "vehicle_taxi_1.png",
    "word": "taxi"
  },
  {
    "file_name": "vehicle_train_1.png",
    "word": "train"
  },
  {
    "file_name": "vehicle_truck_1.png",
    "word": "truck"
  },
  {
    "file_name": "weather_cloudy_1.png",
    "word": "cloudy"
  },
  {
    "file_name": "weather_cold_1.png",
    "word": "cold"
  },
  {
    "file_name": "weather_hot_1.png",
    "word": "hot"
  },
  {
    "file_name": "weather_rainy_1.png",
    "word": "rainy"
  },
  {
    "file_name": "weather_snowy_1.png",
    "word": "snowy"
  },
  {
    "file_name": "weather_sunny_1.png",
    "word": "sunny"
  },
  {
    "file_name": "what-you-did_ate_1.png",
    "word": "ate"
  },
  {
    "file_name": "what-you-did_enjoyed_1.png",
    "word": "enjoyed"
  },
  {
    "file_name": "what-you-did_had_1.png",
    "word": "had"
  },
  {
    "file_name": "what-you-did_saw_1.png",
    "word": "saw"
  },
  {
    "file_name": "what-you-did_went_1.png",
    "word": "went"
  }
]


// start display
const selectMinutes = document.querySelector("select")
const startDisplay = document.querySelector("#start-display");
const startButton = document.querySelector("#start-button");

//timer display
const timerDisplay = document.querySelector(".timer-display");
const timer = document.querySelector(".timer");

//word display
const wordDisplay = document.querySelector("#word-display");
const challenge = document.querySelector(".challenge");
const complete = document.querySelector(".complete");
const accuracy = document.querySelector(".accuracy");
const imageDisplay = document.querySelector("img")

//praise display
const praiseDisplay = document.querySelector("#praise-display");
const accuracyResult = document.querySelector(".accuracy-result");
const speedResult = document.querySelector(".speed-result");
const praiseMsg =  document.querySelector(".praise-msg")

const getRandom = () =>  Math.floor(Math.random() * wordList.length);

//global variables
let correct, total, completeText, currentWord 
let seconds = 60; 
let countDown = 3;
let minutes = "";
let permanentMinutes = "";

// register event listeners
startButton.addEventListener("click", startCountdown);
startButton.addEventListener("click", () => {
  minutes = selectMinutes.value -1;
  permanentMinutes = selectMinutes.value;
})

// display start timer
function startCountdown() {
  // set countdown timer state
  startDisplay.classList.add("remove-element");
  timerDisplay.classList.remove("remove-element");
  praiseDisplay.classList.add("remove-element");
  completeText = "";
  // begin countdown
  const startIntervalID = setInterval(() => {
    timer.textContent = countDown;
    countDown-= 1;
    // clear countdown and begin game timer
    if (countDown === -1) {
      timer.textContent = "Start!";
      correct = 0;
      total =  0;
      accuracy.textContent =  "Accuracy:";
      completeText = "";
      currentWord = "";
      challenge.textContent = "";
      complete.textContent = "";

      clearInterval(startIntervalID);
      let wordDict = wordList[getRandom()];
      imageDisplay.src = `typing_images/${wordDict.file_name}`;
      currentWord = wordDict.word;
      challenge.textContent = currentWord;
      wordDisplay.classList.remove("remove-element")
      document.addEventListener("keypress", changeLetters);
      gameTimer = setInterval(() => {
        // timer condition with minutes greater than 1
        if (minutes > 0) {
          if (seconds > 9) {
            timer.textContent = `0${minutes}:${seconds}`;
          } else {
            timer.textContent = `0${minutes}:0${seconds}`;
          }

        //timer condition with 0 minutes
        } else {
          if (seconds > 9) {
            timer.textContent = `00:${seconds}`;
          } else {
            timer.textContent = `00:0${seconds}`;
          }
        }

        // reduce minute count and reset second count
        if (minutes !== 0 && seconds === 0) {
          minutes -= 1;
          seconds = 11;
        }
        if (minutes === 0 && seconds === 0) {
          clearInterval(gameTimer)
          seconds = 60
          countDown = 3
          timer.textContent = "Ready";
          document.removeEventListener("keypress", changeLetters);
          wordDisplay.classList.add("remove-element");
          timerDisplay.classList.add("remove-element");
          praiseDisplay.classList.remove("remove-element");
          startDisplay.classList.remove("remove-element");
          let finalPercentage = (correct * 100) / total
          if (isNaN(finalPercentage)) {
            finalPercentage = 0.0;
          } else{
            finalPercentage = finalPercentage.toFixed(1);
          }
          accuracyResult.textContent = `Accuracy: ${ finalPercentage } %`
          let wpm = (( correct / 5) / permanentMinutes).toFixed(1)
          speedResult.textContent = `Words Per Minute: ${ wpm }`
          if (wpm < 40) {
            praiseMsg.textContent = "Good job. Keep trying and you'll get to 40 WPM!"
          } else if (wpm > 69) {
            praiseMsg.textContent = "You're lightning! are you sure the keyboard isn't on fire?"
          } else {
            praiseMsg.textContent = messages[wpm.toString()[0]]
          }
        }
        // reduce seconds count
        seconds -= 1;
      },1000)
    }
  }, 1000)
}


function changeLetters(e) {
  total += 1
  let currentLetter = challenge.textContent.slice(0,1);
  if (currentLetter === e.key) {
    correct += 1;
    completeText += currentLetter;
    complete.textContent = completeText;
    let remainingText = challenge.textContent.slice(1);
    challenge.textContent = remainingText;
  } 
  if (currentWord === completeText) {
    complete.textContent = "";
    challenge.textContent = "";
    currentWord = "";
    completeText = "";
    wordDict = wordList[getRandom()];
    currentWord = wordDict.word;
    imageDisplay.src = `typing_images/${wordDict.file_name}`;
    challenge.textContent = currentWord;
  }
  accuracy.textContent = `Accuracy: ${ ((correct * 100) / total).toFixed(1) } %`;
}

