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
user1 = User.create(name: Faker::Name.name, email: Faker::Internet.email)
user2 = User.create(name: Faker::Name.name, email: Faker::Internet.email)
user3 = User.create(name: Faker::Name.name, email: Faker::Internet.email)
user4 = User.create(name: Faker::Name.name, email: Faker::Internet.email)
user5 = User.create(name: Faker::Name.name, email: Faker::Internet.email)
user6 = User.create(name: Faker::Name.name, email: Faker::Internet.email)
user7 = User.create(name: Faker::Name.name, email: Faker::Internet.email)
user8 = User.create(name: Faker::Name.name, email: Faker::Internet.email)
user9 = User.create(name: Faker::Name.name, email: Faker::Internet.email)



puts "Creating restaurants..."
restaurant1 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Mexican", score: Faker::Number.between(from: 1, to: 5))
restaurant2 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Chinese", score: Faker::Number.between(from: 1, to: 5))
restaurant3 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "American", score: Faker::Number.between(from: 1, to: 5))
restaurant4 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Italian", score: Faker::Number.between(from: 1, to: 5))
restaurant5 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Japanese", score: Faker::Number.between(from: 1, to: 5))
restaurant6 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "American", score: Faker::Number.between(from: 1, to: 5))
restaurant7 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Chinese", score: Faker::Number.between(from: 1, to: 5))
restaurant8 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Italian", score: Faker::Number.between(from: 1, to: 5))
restaurant9 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Mexican", score: Faker::Number.between(from: 1, to: 5))
restaurant10 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Chinese", score: Faker::Number.between(from: 1, to: 5))
restaurant11 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Japanese", score: Faker::Number.between(from: 1, to: 5))
restaurant12 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "American", score: Faker::Number.between(from: 1, to: 5))
restaurant13 = Restaurant.create(name: Faker::Restaurant.name, cuisine: "Mexican", score: Faker::Number.between(from: 1, to: 5))



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