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
restaurant1 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Chinese", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"47 W 13th St, New York, NY 10011, USA")
restaurant2 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Chinese", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"47 W 13th St, New York, NY 10011, USA")
restaurant3 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "American", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"345 E 24th St, New York, NY 10010, USA")
restaurant4 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Italian", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"345 E 24th St, New York, NY 10010, USA")
restaurant5 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Japanese", score: Faker::Number.between(from: 1, to: 5),open_time: "11:am", closed_time: "11:pm", address:"120 E 12th St, New York, NY 10003, USA")
restaurant6 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "American", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"1 Washington Mews, New York, NY 10003, USA")
restaurant7 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Chinese", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"7 Washington Pl, New York, NY 10003, USA")
restaurant8 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Italian", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"50 W 4th St, New York, NY 10012, USA")
restaurant12 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Mexican", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"238 1st Ave, New York, NY 10009, USA")
restaurant10 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Chinese", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"22 Washington Square N, New York, NY 10011, USA")
restaurant11 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Japanese", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"40 Washington Square S, New York, NY 10012, USA")
restaurant12 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "American", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"251 Mercer St, New York, NY 10012, USA")
restaurant13 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Mexican", score: Faker::Number.between(from: 1, to: 5), open_time: "11:am", closed_time: "11:pm", address:"136 W 3rd St, New York, NY 10012, USA")



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