class Foodie {

    constructor(name) {
        this.name = name
        this.recipes = []
        this.favoritedRecipes = []
        this.followers = []
        this.following = []
        this.bio = ''
    }

    rateRecipe(recipe, rating, review) {
        if (rating > 0 && rating <= 5) {
            recipe.reviews.push([this.name, rating, review])
            for (let i = 1; i <= 5; i++) {
                if (rating === i) {
                    recipe.starRatings[i-1]++
                }
            }
            recipe.totalRatings++
        } else {
            return `Please choose a number between 1 and 5.`
        }
        console.log(`${this.name} rates ${recipe.name} ${rating} stars!`)
    }

    favorite(recipe) {
        recipe.favorites++
        this.favoritedRecipes.push(recipe)
    }

    unfavorite(recipe) {
        if (recipe.favorites > 0) {
            recipe.favorites--
        }
        this.favoritedRecipes.splice(this.favoritedRecipes.indexOf(recipe), 1)
    }

    createRecipe(recipe) {
        this.recipes.push(recipe)
    }

    follow(person) {
        this.following.push(person)
        person.followers.push(this);
        console.log(`${this.name} is now following ${person.name}!`)
    }

    unfollow(person) {
        this.following.slice(this.following.indexOf(person), 1)
        console.log(`${this.name} unfollowed ${person.name}`)
    }

    get profile() {
        return `
        Name: ${this.name}
        Bio: ${this.bio}
        Recipes: ${this.recipes.map(recipe => recipe.name).join(', ') || `No recipes submitted yet`}
        Favorited Recipes: ${this.favoritedRecipes.map(recipe => recipe.name).join(', ') || `No favorites yet`}
        Followers: ${this.followers.map(follower => follower.name).join(', ') || 0}
        Following: ${this.following.map(following => following.name).join(', ') || 0}
        `
    }
}

module.exports = Foodie