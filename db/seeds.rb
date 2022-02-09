# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding spices..."

puts "Deleting old data..."
User.destroy_all
Restaurant.destroy_all
Review.destroy_all

puts "Creating users..."
user1 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
user2 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
user3 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
user4 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
user5 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
user6 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
user7 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
user8 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
user9 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")



puts "Creating restaurants..."
restaurant1 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Chinese", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"47 W 13th St, New York, NY 10011, USA", image_url: "https://fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg")
restaurant2 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Chinese", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"47 W 13th St, New York, NY 10011, USA", image_url: "https://media.newyorker.com/photos/59097261019dfc3494ea24a5/master/pass/Hsu-Changing-Meanings-of-Asian-Food-in-America.jpg")
restaurant3 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "American", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"345 E 24th St, New York, NY 10010, USA", image_url: "https://media.istockphoto.com/photos/hamburger-table-scene-top-view-over-dark-wood-picture-id1252796974?b=1&k=20&m=1252796974&s=170667a&w=0&h=bv0YG2MlmdhPcv4Ql8ENmcUNVkiavOjuY7RYJsPZcmo=")
restaurant4 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Italian", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"345 E 24th St, New York, NY 10010, USA", image_url: "https://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce11.jpg")
restaurant5 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Japanese", score: Faker::Number.between(from: 1, to: 5),open_time: "11:am", closed_time: "11:pm", address:"120 E 12th St, New York, NY 10003, USA", image_url: "https://media.istockphoto.com/photos/japanese-food-picture-id917919440?k=20&m=917919440&s=612x612&w=0&h=XXHaYI8ZlW2QqI558AT1N2P83b0aGEKKdsPRhEQmnGc=")
restaurant6 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "American", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"1 Washington Mews, New York, NY 10003, USA", image_url: "https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg")
restaurant7 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Chinese", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"7 Washington Pl, New York, NY 10003, USA", image_url: "https://media.cntraveler.com/photos/5f63b787978ff785b25015e7/master/w_4202,h_2796,c_limit/Schezwan%20Prawns-2A4D9JC.jpg")
restaurant8 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Italian", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"50 W 4th St, New York, NY 10012, USA", image_url: "https://insanelygoodrecipes.com/wp-content/uploads/2020/03/Lasagna.png")
restaurant12 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Mexican", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"238 1st Ave, New York, NY 10009, USA", image_url: "https://www.findhomeaway.com/files/blog/202109201832446148d3cc4df40.jpg")
restaurant10 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Chinese", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"22 Washington Square N, New York, NY 10011, USA", image_url: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1616,w_2400,x_0,y_184/v1640119246/shape/mentalfloss/521724-gettyimages-839958568.jpg?itok=NmBuPXQD")
restaurant11 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Japanese", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"40 Washington Square S, New York, NY 10012, USA", image_url: "https://i.ndtvimg.com/i/2016-04/japanese-food-625_625x406_81461928658.jpg")
restaurant12 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "American", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"251 Mercer St, New York, NY 10012, USA", image_url: "https://media.istockphoto.com/photos/homemade-memorial-day-hamburger-picnic-picture-id531564300?k=20&m=531564300&s=612x612&w=0&h=j8y_MXtEORMI14XvyuzpzrB3msBOwzl-DeWhEHyMFWk=")
restaurant13 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Mexican", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"136 W 3rd St, New York, NY 10012, USA", image_url: "https://i.insider.com/5ae36708bd967148008b461f?width=700")



puts "Creating reviews..."
review1 = Review.create(
    comment: Faker::Lorem.paragraph,
    user_id: user1.id, 
    restaurant_id: restaurant2.id, 
)
review2 = Review.create(
    comment: Faker::Lorem.paragraph,
    user_id: user3.id, 
    restaurant_id: restaurant1.id, 
)
review3 = Review.create(
    comment: Faker::Lorem.paragraph,
    user_id: user2.id, 
    restaurant_id: restaurant5.id, 
)
review4 = Review.create(
    comment: Faker::Lorem.paragraph,
    user_id: user4.id, 
    restaurant_id: restaurant2.id, 
)
review5 = Review.create(
    comment: Faker::Lorem.paragraph,
    user_id: user6.id, 
    restaurant_id: restaurant7.id, 
)
review6 = Review.create(
    comment: Faker::Lorem.paragraph,
    user_id: user9.id, 
    restaurant_id: restaurant10.id, 
)
review7 = Review.create(
    comment: Faker::Lorem.paragraph,
    user_id: user8.id, 
    restaurant_id: restaurant6.id, 
)
review8 = Review.create(
    comment: Faker::Lorem.paragraph,
    user_id: user9.id, 
    restaurant_id: restaurant13.id, 
)
review9 = Review.create(
    comment: Faker::Lorem.paragraph,
    user_id: user3.id, 
    restaurant_id: restaurant6.id, 
)
review10 = Review.create(
    comment: Faker::Lorem.paragraph,
    user_id: user5.id, 
    restaurant_id: restaurant8.id, 
)

puts "✅ Done seeding!"