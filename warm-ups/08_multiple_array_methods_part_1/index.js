//INCOMPLETE

let data = [
    {}
]

function sortDogOwners(petOwners) {
    let dogOwners = petOwners.filter((petOwner) => {
        return petOwner.pets.includes("dog");
    });
    return dogOwners.sort((dogOwner1, dogOwner2) => {
        let age1 = dogOwner1.age;
        let age2 = dogOwner2.age;
        return age1 - age2;
    })
}

console.log(sortDogOwners(data));
