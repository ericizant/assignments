import React from "react";

import Content from "./Content";
import "./index.css";

function App() {
    return (
        <div className="app-wrapper">
            <Content boxProps={{
                title: "Dog",
                subtitle: "Canine",
                information: "Dogs have four legs and padded paws. They are cute and fun. They bark."
            }}
                parentStyle={{ backgroundColor: "red", height: "300px", width: "300px", textAlign: "center", padding: "20px" }}>
            </Content>
            <Content boxProps={{
                title: "Cat",
                subtitle: "Feline",
                information: "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws. It is widely kept as a pet or for catching mice, and many breeds have been developed."
            }}
                parentStyle={{ backgroundColor: "orange", height: "300px", width: "300px", textAlign: "center", padding: "20px" }}>
            </Content>
            <Content boxProps={{
                title: "Betta Fish",
                subtitle: "Fish",
                information: "The Siamese fighting fish, also sometimes colloquially known as the betta, is a species in the gourami family which is popular as an aquarium fish. Bettas can be territorial fish and are prone to high levels of aggression towards each other."
            }}
                parentStyle={{ backgroundColor: "yellow", height: "300px", width: "300px", textAlign: "center", padding: "20px" }}>
            </Content>
            <Content boxProps={{
                title: "Turtle",
                subtitle: "Reptile",
                information: "A slow-moving reptile, enclosed in a scaly or leathery domed shell into which it can retract its head and thick legs."
            }}
                parentStyle={{ backgroundColor: "green", height: "300px", width: "300px", textAlign: "center", padding: "20px" }}>
            </Content>
            <Content boxProps={{
                title: "Hamster",
                subtitle: "Rodent",
                information: "Hamsters are technically rodents but have nonetheless become popular small house pets. Because they are easy to breed in captivity, hamsters are often used as laboratory animals."
            }}
                parentStyle={{ backgroundColor: "blue", height: "300px", width: "300px", textAlign: "center", padding: "20px" }}>
            </Content>
            <Content boxProps={{
                title: "Ferret",
                subtitle: "Polecat",
                information: "A domesticated polecat kept as a pet or used, especially in Europe, for catching rabbits. It is typically albino or brown."
            }}
                parentStyle={{ backgroundColor: "purple", height: "300px", width: "300px", textAlign: "center", padding: "20px" }}>
            </Content>
            <Content boxProps={{
                title: "Cobra",
                subtitle: "Snake",
                information: "A highly venomous snake native to Africa and Asia that spreads the skin of its neck into a hood when disturbed."
            }}
                parentStyle={{ backgroundColor: "grey", height: "300px", width: "300px", textAlign: "center", padding: "20px" }}>
            </Content>
            <Content boxProps={{
                title: "Hermit Crab",
                subtitle: "Crustacean",
                information: "A crab with a soft asymmetrical abdomen that lives in a castoff mollusk shell for protection. In several kinds, the shell becomes covered with sponges, sea anemones, or bryozoans."
            }}
                parentStyle={{ backgroundColor: "darkslategray", height: "300px", width: "300px", textAlign: "center", padding: "20px" }}>
            </Content>
            <Content boxProps={{
                title: "Goldfish",
                subtitle: "Fish",
                information: "A small reddish-golden Eurasian carp, popular in ponds and aquariums. A long history of breeding in China and Japan has resulted in many varieties of form and color."
            }}
                parentStyle={{ backgroundColor: "lightblue", height: "300px", width: "300px", textAlign: "center", padding: "20px" }}>
            </Content>
            <Content boxProps={{
                title: "Guinea Pig",
                subtitle: "Rodent",
                information: "A domesticated, tailless South American cavy, originally raised for food. It no longer occurs in the wild and is now typically kept as a pet or for laboratory research."
            }}
                parentStyle={{ backgroundColor: "coral", height: "300px", width: "300px", textAlign: "center", padding: "20px" }}>
            </Content>
        </div>
    );
}

export default App;
