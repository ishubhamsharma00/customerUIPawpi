import BrandIcon from "../../Images/SlideNavbarSmScreen/BrandIcon.png";
import BreedIcon from "../../Images/SlideNavbarSmScreen/BreedIcon.png";
import CatIcon from "../../Images/SlideNavbarSmScreen/CatIcon.png";
import DogIcon from "../../Images/SlideNavbarSmScreen/DogIcon.png";
import LifestageIcon from "../../Images/SlideNavbarSmScreen/LifestageIcon.png";

import acana from "../../Images/Brands/acana.png";
import aj from "../../Images/Brands/aj.png";
import all4pets from "../../Images/Brands/all4pets.png";
import ardenGrange from "../../Images/Brands/ardenGrange.png";
import barkOutLoud from "../../Images/Brands/barkOutLoud.png";
import Basil from "../../Images/Brands/Basil.png";
import BioPetActive from "../../Images/Brands/BioPetActive.png";
import chipChops from "../../Images/Brands/chipChops.png";
import Dogaholic from "../../Images/Brands/Dogaholic.png";
import drools from "../../Images/Brands/drools.png";
import DrPets from "../../Images/Brands/DrPets.png";
import FarminaNnD from "../../Images/Brands/FarminaNnD.png";
import Fidele from "../../Images/Brands/Fidele.png";
import Fido from "../../Images/Brands/Fido.png";
import Gnawlers from "../../Images/Brands/Gnawlers.png";
import hills from "../../Images/Brands/hills.png";
import kong from "../../Images/Brands/kong.png";
import nulo from "../../Images/Brands/nulo.png";
import nutro from "../../Images/Brands/nutro.png";
import Pedigree from "../../Images/Brands/Pedigree.png";
import royalCanin from "../../Images/Brands/royalcanin.png";
import trixie from "../../Images/Brands/trixie.png";

export const links = [
  {
    name: "Dog",
    submenu: true,
    id: "/dog",
    icon: DogIcon,
    sublinks: [
      {
        Head: "Food",
        sublinksid: "/dog/food",
        sublink: [
          { name: "Dry Food", link: "/", sublinkid: "dogdryfood" },
          { name: "Wet Food", link: "/", sublinkid: "WetFood" },
          { name: "Puppy Food", link: "/", sublinkid: "PuppyFood" },
          { name: "Grain Free Food", link: "/", sublinkid: "GrainFreeFood" },
          {
            name: "Protien Rich Food",
            link: "/",
            sublinkid: "ProtienRichFood",
          },
          { name: "Supplements", link: "/", sublinkid: "Supplements" },
        ],
      },
      {
        Head: "Bisc Treats & Chews",
        sublinksid: "/dog/bisc-treats-chews",
        sublink: [
          { name: "Biscuits", link: "/", sublinkid: "Biscuits" },
          { name: "Veg Treats", link: "/", sublinkid: "VegTreats" },
          { name: "Natural Treats", link: "/", sublinkid: "NaturalTreats" },
          { name: "Puppy Dental", link: "/", sublinkid: "PuppyDental" },
          { name: "Soft & Hard", link: "/", sublinkid: "SoftHard" },
        ],
      },
      {
        Head: "Walk Essentials",
        sublinksid: "walk essential",
        sublink: [
          { name: "Collars", link: "/", sublinkid: "Collars" },
          { name: "Leashes", link: "/", sublinkid: "Leashes" },
          { name: "Harness", link: "/", sublinkid: "Harness" },
          { name: "Name Tags", link: "/", sublinkid: "NameTags" },
          {
            name: "Collar & Leash Set",
            link: "/",
            sublinkid: "CollarLeashSet",
          },
          { name: "Personalised", link: "/", sublinkid: "Personalised" },
        ],
      },
      {
        Head: "Bedding & Mats",
        sublinksid: "bedding & mats",
        sublink: [
          { name: "Beds", link: "/", sublinkid: "Beds" },
          { name: "Mats", link: "/", sublinkid: "Mats" },
          {
            name: "Blankets & Cushion",
            link: "/",
            sublinkid: "BlanketsCushion",
          },
          { name: "Bed Covers", link: "/", sublinkid: "BedCovers" },
          {
            name: "Personalised Bedding",
            link: "/",
            sublinkid: "PersonalisedBedding",
          },
        ],
      },
      {
        Head: "Grooming",
        sublinksid: "grooming",
        sublink: [
          { name: "Shampoos", link: "/", sublinkid: "Shampoos" },
          { name: "Conditioner", link: "/", sublinkid: "Conditioner" },
          { name: "Brushes & Combs", link: "/", sublinkid: "BrushesCombs" },
          { name: "Tick & Flea", link: "/", sublinkid: "TickFlea" },
          { name: "Paw Care", link: "/", sublinkid: "PawCare" },
          {
            name: "Dentangling Solutions",
            link: "/",
            sublinkid: "DentanglingSolutions",
          },
        ],
      },
      {
        Head: "Toys",
        sublinksid: "toys",
        sublink: [
          { name: "Chew Toys", link: "/", sublinkid: "ChewToys" },
          { name: "Plush Toys", link: "/", sublinkid: "PlushToys" },
          { name: "Balls", link: "/", sublinkid: "Balls" },
          { name: "Interactive Toys", link: "/", sublinkid: "InteractiveToys" },
          { name: "Tough Chewers", link: "/", sublinkid: "ToughChewers" },
          { name: "Rope Toys", link: "/", sublinkid: "RopeToys" },
        ],
      },
      {
        Head: "Clothing",
        sublinksid: "clothing",
        sublink: [
          { name: "Winter Wear", link: "/", sublinkid: "WinterWear" },
          { name: "Rian Coats", link: "/", sublinkid: "RianCoats" },
          { name: "Tshirts & Shirts", link: "/", sublinkid: "TshirtsShirts" },
          {
            name: "Occasional Dresswear",
            link: "/",
            sublinkid: "OccasionalDresswear",
          },
        ],
      },

      {
        Head: "Bowls & Diner ",
        sublinksid: "bowls & diner",
        sublink: [
          { name: "Steel Bowls", link: "/", sublinkid: "SteelBowls" },
          { name: "Elevated Bowls", link: "/", sublinkid: "ElevatedBowls" },
          { name: "Slow Feeders", link: "/", sublinkid: "SlowFeeders" },
          { name: "Licki Mats", link: "/", sublinkid: "LickiMats" },
          { name: "Anti Spills Mats", link: "/", sublinkid: "AntiSpillsMats" },
        ],
      },
      {
        Head: "Health & Hygiene ",
        sublinksid: "health & hygiene",
        sublink: [
          { name: "Oral Care", link: "/", sublinkid: "OralCare" },
          { name: "Supplements", link: "/", sublinkid: "Supplements" },
          { name: "Tick & Flea", link: "/", sublinkid: "TickFlea" },
          { name: "Stain & Odour", link: "/", sublinkid: "StainOdour" },
          { name: "Pee Lock Powder", link: "/", sublinkid: "PeeLockPowder" },
        ],
      },
      {
        Head: "Accessories",
        sublinksid: "accessories",
        sublink: [
          {
            name: "Bow Ties & Bandanas",
            link: "/",
            sublinkid: "BowTiesBandanas",
          },
          {
            name: "Party Accessories",
            link: "/",
            sublinkid: "PartyAccessories",
          },
          { name: "Shoes & Socks", link: "/", sublinkid: "ShoesSocks" },
          {
            name: "Personalised Accessories",
            link: "/",
            sublinkid: "PersonalisedAccessories",
          },
        ],
      },
      {
        Head: "Travel",
        sublinksid: "travel",
        sublink: [
          { name: "Ramps & Steps", link: "/", sublinkid: "RampsSteps" },
          {
            name: "Crates & Carriers ",
            link: "/",
            sublinkid: "CratesCarriers",
          },
        ],
      },
    ],
  },
  {
    name: "Cat",
    submenu: true,
    id: "/cat",
    icon: CatIcon,
    sublinks: [
      {
        Head: "Food",
        sublinksid: "/cats/foods",
        sublink: [
          { name: "Dry Food", link: "/", sublinkid: "DryFood" },
          { name: "Wet Food", link: "/", sublinkid: "WetFood" },
          { name: "Kitten Food", link: "/", sublinkid: "KittenFood" },
        ],
      },
      {
        Head: "Litter & Supplies",
        sublinksid: "litter & supplies",
        sublink: [
          { name: "Litter", link: "/", sublinkid: "Litter" },
          { name: "Toilets & Trays", link: "/", sublinkid: "ToiletsTrays" },
          { name: "Scoopers", link: "/", sublinkid: "KittenFood" },
          { name: "Odour", link: "/", sublinkid: "KittenOdour" },
        ],
      },

      {
        Head: "Treats",
        sublinksid: "treats",
        sublink: [
          { name: "Natural Treats", link: "/", sublinkid: "NaturalTreats" },
          { name: "Creamy Treats", link: "/", sublinkid: "CreamyTreats" },
          { name: "All Treats", link: "/", sublinkid: "AllTreats" },
          { name: "Medicated Treats", link: "/", sublinkid: "MedicatedTreats" },
        ],
      },
      {
        Head: "Carriers",
        sublinksid: "carriers",
        sublink: [
          { name: "Crates", link: "/", sublinkid: "Crates" },
          { name: "Carriers", link: "/", sublinkid: "Carriers" },
          { name: "Bags", link: "/", sublinkid: "Bags" },
        ],
      },
      {
        Head: "Toys",
        sublinksid: "toys",
        sublink: [
          { name: "Plush Toys", link: "/", sublinkid: "PlushToys" },
          { name: "Interactive Toys", link: "/", sublinkid: "InteractiveToys" },
          { name: "Catnip", link: "/", sublinkid: "Catnip" },
          { name: "Stretcher", link: "/", sublinkid: "Stretcher" },
          { name: "Teasers & Wands", link: "/", sublinkid: "TeasersWands" },
        ],
      },

      {
        Head: "Groomings",
        sublinksid: "groomings",
        sublink: [
          { name: "Shampoos", link: "/", sublinkid: "Shampoos" },
          { name: "Towels", link: "/", sublinkid: "Towels" },
          { name: "Wipes", link: "/", sublinkid: "Wipes" },
          { name: "Stain & Odour", link: "/", sublinkid: "StainOdour" },
          { name: "Tick & Flea", link: "/", sublinkid: "TickFlea" },
          { name: "Brushes", link: "/", sublinkid: "Brushes" },
        ],
      },
      {
        Head: "Beddings",
        sublinksid: "beddings",
        sublink: [
          { name: "Tents", link: "/", sublinkid: "Tents" },
          { name: "Beds", link: "/", sublinkid: "Beds" },
          { name: "Mattress", link: "/", sublinkid: "Mattress" },
          { name: "Couches", link: "/", sublinkid: "Couches" },
        ],
      },
      {
        Head: "Collars & Accessories",
        sublinksid: "collars & accessories",
        sublink: [
          { name: "Harness", link: "/", sublinkid: "Harness" },
          { name: "Bandanas", link: "/", sublinkid: "Bandanas" },
          { name: "", link: "/", sublinkid: "Kitten " },
        ],
      },
      {
        Head: "Dining",
        sublinksid: "dining",
        sublink: [{ name: "Cat Bowls", link: "/", sublinkid: "CatBowls" }],
      },
    ],
  },
  {
    name: "Brands",
    submenu: true,
    id: "/brands",
    icon: BrandIcon,
    sublinks: [
      {
        Head: "Brands",
        sublinksid: "brands",
        sublink: [
          {
            name: "ALL4PETS",
            link: "/brands/all4pets",
            logo: all4pets,
          },
          {
            name: "Acana",
            link: "/brands/acana",
            logo: acana,
          },
          {
            name: "aj",
            link: "/brands/aj",
            logo: aj,
          },
          {
            name: "Arden Grange",
            link: "/brands/arden_grange",
            logo: ardenGrange,
          },
          {
            name: "Bark Out Loud",
            link: "/brands/bark_out_loud",
            logo: barkOutLoud,
          },
          {
            name: "Basil",
            link: "/brands/basil",
            logo: Basil,
          },
          {
            name: "Bio Pet Active",
            link: "/brands/bio_pet_active",
            logo: BioPetActive,
          },
          {
            name: "Chip Chops",
            link: "/brands/chip_chops",
            logo: chipChops,
          },
          {
            name: "Dogaholic",
            link: "/brands/dogaholic",
            logo: Dogaholic,
          },
          {
            name: "Drools",
            link: "/brands/drools",
            logo: drools,
          },
          {
            name: "Dr.Pets",
            link: "/brands/dr_pets",
            logo: DrPets,
          },
          {
            name: "Farmina N&D",
            link: "/brands/farmina_NnD",
            logo: FarminaNnD,
          },
          {
            name: "Fidele",
            link: "/brands/fidele",
            logo: Fidele,
          },
          {
            name: "Fido",
            link: "/brands/fido",
            logo: Fido,
          },
          {
            name: "Gnawlers",
            link: "/brands/gnawlers",
            logo: Gnawlers,
          },
          {
            name: "Hills",
            link: "/brands/hills",
            logo: hills,
          },
          {
            name: "Kong",
            link: "/brands/kong",
            logo: kong,
          },
          {
            name: "Nulo",
            link: "/brands/nulo",
            logo: nulo,
          },
          {
            name: "Nutro",
            link: "/brands/nutro",
            logo: nutro,
          },
          {
            name: "Pedigree",
            link: "/brands/pedigree",
            logo: Pedigree,
          },
          {
            name: "Royal Canin",
            link: "/brands/royal_canin",
            logo: royalCanin,
          },
          {
            name: "Trixie",
            link: "/brands/trixie",
            logo: trixie,
          },
        ],
      },
      //   {
      //     Head: "A",
      //     sublinksid : "a",
      //     sublink: [
      //       { name: "ALL4PET", link: "/" , sublinkid :  "ALL4PET"},
      //       { name: "ARDEN GRANGE", link: "/" , sublinkid :  "ARDEN GRANGE"},

      //     ],
      //   },
      //   {
      //     Head: "B",
      //     sublinksid : "b",
      //     sublink: [
      //        { name: "Bark Out Loud", link: "/" , sublinkid :  "Bark Out Loud"},
      //        { name: "Basil", link: "/" , sublinkid :  "Basil"},
      //        { name: "Bio Pet Active", link: "/" , sublinkid :  "Bio Pet Active"},
      //        { name: "BOW", link: "/" , sublinkid :  "BOW"},
      //     ],
      //   },
      //   {
      //     Head: "C",
      //     sublinksid : "c",
      //     sublink: [
      //        { name: "Chelsea", link: "/" , sublinkid :  "Chelsea"},
      //        { name: "Chip Chop", link: "/" , sublinkid :  "Chip Chop"},
      //        { name: "Cuddle", link: "/" , sublinkid :  "Cuddle"},
      //        { name: "Dental Bites", link: "/" , sublinkid :  "Dental Bites"},
      //        { name: "Dogaholic", link: "/" , sublinkid :  "Dogaholic"},
      //        { name: "DR PETS", link: "/" , sublinkid :  "DR PETS"},
      //        { name: "Dr.Pet", link: "/" , sublinkid :  "Dr.Pet"},
      //        { name: "Drools", link: "/" , sublinkid :  "Drools"},
      //        { name: "DUX", link: "/" , sublinkid :  "DUX"},
      //     ],
      //   },
      //   {
      //     Head: "D",
      //     sublinksid : "d",
      //     sublink: [
      //        { name: "Dental Bites", link: "/" , sublinkid :  "Dental Bites"},
      //        { name: "Dogaholic", link: "/" , sublinkid :  "Dogaholic"},
      //        { name: "DR PETS", link: "/" , sublinkid :  "DR PETS"},
      //        { name: "Dr.Pet", link: "/" , sublinkid :  "Dr.Pet"},
      //        { name: "Drools", link: "/" , sublinkid :  "Drools"},
      //        { name: "DUX", link: "/" , sublinkid :  "DUX"},
      //     ],
      //   },
      //   {
      //     Head: "F",
      //     sublinksid : "f",
      //     sublink: [
      //        { name: "Farmina N&D", link: "/" , sublinkid :  "Farmina N&D"},
      //        { name: "FEEDO", link: "/" , sublinkid :  "FEEDO"},
      //        { name: "FIDELE", link: "/" , sublinkid :  "FIDELE"},
      //        { name: "Fido", link: "/" , sublinkid :  "Fido"},
      //        { name: "First Meow", link: "/" , sublinkid :  "First Meow"},
      //        { name: "Fofos", link: "/" , sublinkid :  "Dr.Pet"},
      //        { name: "Fresh For Paws", link: "/" , sublinkid :  "Fresh For Paws"},
      //        { name: "Gnawlers", link: "/" , sublinkid :  "Gnawlers"},
      //        { name: "Go Pets", link: "/" , sublinkid :  "Go Pets"},
      //        { name: "Goodies", link: "/" , sublinkid :  "Goodies"},
      //     ],
      //   },

      //   {
      //     Head: "G",
      //     sublinksid : "g",
      //     sublink: [
      //       { name: "Gnawlers", link: "/" , sublinkid :  "Gnawlers"},
      //       { name: "Go Pets", link: "/" , sublinkid :  "Go Pets"},
      //       { name: "Goodies", link: "/" , sublinkid :  "Goodies"},
      //     ],
      //   },
      //   {
      //     Head: "H",
      //     sublinksid : "h",
      //     sublink: [
      //        { name: "Healthy Bites", link: "/" , sublinkid :  "Healthy Bites"},
      //     ],
      //   },
      //   {
      //     Head: "J",
      //     sublinksid : "j",
      //     sublink: [
      //        { name: "Jinny", link: "/" , sublinkid :  "Jinny"},
      //     ],
      //   },
      //   {
      //     Head: "K",
      //     sublinksid : "k",
      //     sublink: [
      //        { name: "KIT KAT", link: "/" , sublinkid :  "KIT KAT"},
      //        { name: "Kittos", link: "/" , sublinkid :  "Kittos"},
      //        { name: "Kitty Licks", link: "/" , sublinkid :  "Kitty Licks"},
      //        { name: "Krrispy Bites", link: "/" , sublinkid :  "Krrispy Bites"},
      //     ],
      //   },
      //   {
      //     Head: "L",
      //     sublinksid : "l",
      //     sublink: [
      //        { name: "LARA", link: "/" , sublinkid :  "LARA"},
      //        { name: "Lozalo", link: "/" , sublinkid :  "Lozalo"},
      //     ],
      //   },
      //   {
      //     Head: "M",
      //     sublinksid : "m",
      //     sublink: [
      //        { name: "Mera Dog", link: "/" , sublinkid :  "Mera Dog"},
      //        { name: "MYBEAU", link: "/" , sublinkid :  "MYBEAU"},
      //     ],
      //   },
      //   {
      //     Head: "N",
      //     sublinksid : "n",
      //     sublink: [
      //        { name: "Natural Remedies", link: "/" , sublinkid :  "Natural Remedies"},
      //     ],
      //   },
      //   {
      //     Head: "P",
      //     sublinksid : "p",
      //     sublink: [
      //        { name: "Pawpaya", link: "/" , sublinkid :  "Pawpaya"},
      //        { name: "Pet Perfect", link: "/" , sublinkid :  "Pet Perfect"},
      //        { name: "Pet Toy", link: "/" , sublinkid :  "Pet Toy"},
      //        { name: "Petaholic", link: "/" , sublinkid :  "Petaholic"},
      //        { name: "Petcare", link: "/" , sublinkid :  "Petcare"},
      //        { name: "Petspoon", link: "/" , sublinkid :  "Petspoon"},
      //        { name: "Procott", link: "/" , sublinkid :  "Procott"},
      //        { name: "PRODIET", link: "/" , sublinkid :  "PRODIET"},
      //        { name: "Purina Felix", link: "/" , sublinkid :  "Purina Felix"},
      //    ],
      //   },
      //   {
      //     Head: "R",
      //     sublinksid : "r",
      //     sublink: [
      //        { name: "Rena", link: "/" , sublinkid :  "Rena"},

      // ],
      //   },
      //   {
      //     Head: "S",
      //     sublinksid : "s",
      //     sublink: [
      //        { name: "SNIFFY", link: "/" , sublinkid :  "SNIFFY"},
      //        { name: "Superpet", link: "/" , sublinkid :  "Superpet"},
      // ],
      //   },
      //   {
      //     Head: "T",
      //     sublinksid : "t",
      //     sublink: [
      //        { name: "Trixie", link: "/" , sublinkid :  "Trixie"},
      // ],
      //   },
      //   {
      //     Head: "V",
      //     sublinksid : "v",
      //     sublink: [
      //        { name: "Venworld", link: "/" , sublinkid :  "Venworld"},
      //        { name: "Vibrac", link: "/" , sublinkid :  "Vibrac"},
      // ],
      //   },
      //   {
      //     Head: "W",
      //     sublinksid : "w",
      //     sublink: [
      //        { name: "Waggy Zone", link: "/" , sublinkid :  "Waggy Zone"},
      //        { name: "Whoof Whoof", link: "/" , sublinkid :  "Whoof Whoof"},
      //        { name: "Wiggles.in", link: "/" , sublinkid :  "Wiggles.in"},
      //  ],
      //   },
    ],
  },
  {
    name: "Breeds",
    submenu: true,
    id: "/breed",
    icon: BreedIcon,
    sublinks: [
      {
        Head: "DOG",
        sublinksid: "dogbreed",
        sublink: [
          { name: "German Shepherd", link: "/", sublinkid: "German Shepherd" },
          {
            name: "Golden Retriever",
            link: "/",
            sublinkid: "Golden Retriever",
          },
          { name: "Pug", link: "/", sublinkid: "Pug" },
          { name: "Beagle", link: "/", sublinkid: "Beagle" },
          { name: "Husky", link: "/", sublinkid: "Husky" },
          { name: "Dalmatians", link: "/", sublinkid: "Dalmatians" },
          { name: "Pitbull", link: "/", sublinkid: "Pitbull" },
          { name: "Pomeranian", link: "/", sublinkid: "Pomeranian" },
          { name: "Chihuahua", link: "/", sublinkid: "Chihuahua" },
          { name: "Shih-Tzu", link: "/", sublinkid: "Shih-Tzu" },
          {
            name: "Labrador Retriever",
            link: "/",
            sublinkid: "Labrador Retriever",
          },
          { name: "Border Collie", link: "/", sublinkid: "Border Collie" },
          { name: "Rotwielier", link: "/", sublinkid: "Rotwielier" },
          { name: "Cocker-Spaniel", link: "/", sublinkid: "Cocker-Spaniel" },
          { name: "Saint-Bernard", link: "/", sublinkid: "Saint-Bernard" },
          { name: "Bulldog", link: "/", sublinkid: "Beagle" },
        ],
      },
      {
        Head: "Cat",
        sublinksid: "cat breed",
        sublink: [
          { name: "Bengal Cats", link: "/", sublinkid: "Bengal Cats" },
          { name: "Persian Cats", link: "/", sublinkid: "Persian Cats" },
          { name: "Siamese Cats", link: "/", sublinkid: "Siamese Cats" },
          { name: "The Maine Coon", link: "/", sublinkid: "The Maine Coon" },
          { name: "The Bombay Cats", link: "/", sublinkid: "The Bombay Cats" },
          { name: "Himalayan Cats", link: "/", sublinkid: "Himalayan Cats" },
          {
            name: "Exotic Short hair",
            link: "/",
            sublinkid: "Exotic Short hair",
          },
          {
            name: "American Bobtail",
            link: "/",
            sublinkid: "American Bobtail",
          },
          { name: "Munchkin", link: "/", sublinkid: "Munchkin" },
          { name: "Ragdoll", link: "/", sublinkid: "Ragdoll" },
          {
            name: "British Shorthair",
            link: "/",
            sublinkid: "British Shorthair",
          },
        ],
      },
    ],
  },

  {
    name: "Lifestage",
    submenu: true,
    id: "/lifestage",
    icon: LifestageIcon,
    sublinks: [
      {
        Head: "DOG",
        sublinksid: "doglifestages",
        sublink: [
          { name: "Starter", link: "/", sublinkid: "Starter" },
          { name: "Puppy", link: "/", sublinkid: "Puppy" },
          { name: "Adult", link: "/", sublinkid: "z" },
        ],
      },
      {
        Head: "CAT",
        sublinksid: "catlifestages",
        sublink: [
          { name: "Kitten", link: "/", sublinkid: "Kitten" },
          { name: "Adult Cat", link: "/", sublinkid: "Puppy" },
        ],
      },
    ],
  },
];
