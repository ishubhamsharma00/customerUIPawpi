import BrandIcon from '../../Images/SlideNavbarSmScreen/BrandIcon.png';
import BreedIcon from '../../Images/SlideNavbarSmScreen/BreedIcon.png';
import CatIcon from '../../Images/SlideNavbarSmScreen/CatIcon.png';
import DogIcon from '../../Images/SlideNavbarSmScreen/DogIcon.png';
import LifestageIcon from '../../Images/SlideNavbarSmScreen/LifestageIcon.png';

import acana from '../../Images/Brands/acana.png';
import aj from '../../Images/Brands/aj.png';
import all4pets from '../../Images/Brands/all4pets.png';
import ardenGrange from '../../Images/Brands/ardenGrange.png';
import barkOutLoud from '../../Images/Brands/barkOutLoud.png';
import Basil from '../../Images/Brands/Basil.png';
import BioPetActive from '../../Images/Brands/BioPetActive.png';
import chipChops from '../../Images/Brands/chipChops.png';
import Dogaholic from '../../Images/Brands/Dogaholic.png';
import drools from '../../Images/Brands/drools.png';
import DrPets from '../../Images/Brands/DrPets.png';
import FarminaNnD from '../../Images/Brands/FarminaNnD.png';
import Fidele from '../../Images/Brands/Fidele.png';
import Fido from '../../Images/Brands/Fido.png';
import Gnawlers from '../../Images/Brands/Gnawlers.png';
import hills from '../../Images/Brands/hills.png';
import kong from '../../Images/Brands/kong.png';
import nulo from '../../Images/Brands/nulo.png';
import nutro from '../../Images/Brands/nutro.png';
import Pedigree from '../../Images/Brands/Pedigree.png';
import royalCanin from '../../Images/Brands/royalcanin.png';
import trixie from '../../Images/Brands/trixie.png';


export const links = [
    {
      name: "Dog",
      submenu: true,
      id : "dog-products",
      icon: DogIcon,
      sublinks: [
        {
          Head: "Food",
          sublinksid : "dog-food",
          sublink: [
            { name: "Dry Food", link: "/" , sublinkid :  "dry-dog-food"},            
            { name: "Wet Food", link: "/" , sublinkid :  "wet-dog-food"},
            { name: "Puppy Food", link: "/" , sublinkid :  "all-puppy-food"},            
            { name: "Grain Free Food", link: "/" , sublinkid :  "gluten-and-grain-free-dog-food"},
            { name: "Protien Rich Food", link: "/" , sublinkid :  "protien-rich-dog-food"},
            { name: "Supplements", link: "/" , sublinkid :  "suppliments-dog-food"},
          ],
        },
        {
          Head: "Bisc Treats & Chews",
          sublinksid : "dog-treats-biscuits",
          sublink: [
            { name: "Biscuits", link: "/", sublinkid :  "dog-bisc-treats-&-chews-biscuits"  },
            { name: "Veg Treats", link: "/" , sublinkid :  "dog-bisc-treats-&-chews-vegtreats"},
            { name: "Natural Treats", link: "/" , sublinkid :  "dog-bisc-treats-&-chews-naturaltreats"},
            { name: "Puppy Dental", link: "/" , sublinkid :  "dog-bisc-treats-&-chews-puppydental"},
            { name: "Soft & Hard", link: "/" , sublinkid :  "dog-bisc-treats-&-chews-soft&hard"},

          ],
        },
        {
          Head: "Walk Essentials",
          sublinksid : "dog-walk-essential",
          sublink: [
            { name: "Collars", link: "/", sublinkid :  "dog-walk-essential-collars"  },
            { name: "Leashes", link: "/" , sublinkid :  "dog-walk-essential-leashes"},
            { name: "Harness", link: "/" , sublinkid :  "dog-walk-essential-harness"},
            { name: "Name Tags", link: "/" , sublinkid :  "dog-walk-essential-nametags"},
            { name: "Collar & Leash Set", link: "/" , sublinkid :  "dog-walk-essential-collar&leashset"},
            { name: "Personalised", link: "/" , sublinkid :  "personalised-collars-and-leashes"},

          ],
        },
        {
          Head: "Bedding & Mats",
          sublinksid : "dog-beddings-&-mats",
          sublink: [
            { name: "Beds", link: "/", sublinkid :  "dog-beddings-&-mats-beds"  },
            { name: "Mats", link: "/" , sublinkid :  "dog-beddings-&-mats-mats"},
            { name: "Blankets & Cushion", link: "/" , sublinkid :  "dog-beddings-&-mats-blanket&cushion"},
            { name: "Bed Covers", link: "/" , sublinkid :  "dog-beddings-&-mats-bed-cover"},
            { name: "Personalised Bedding", link: "/" , sublinkid :  "dog-beddings-&-mats-personalisedbedding"},

          ],
        },
        {
          Head: "Grooming",
          sublinksid : "dog-grooming",
          sublink: [
            { name: "Shampoos", link: "/", sublinkid :  "dog-grooming-shampoo"  },
            { name: "Conditioner", link: "/" , sublinkid :  "dog-grooming-conditioner"},
            { name: "Brushes & Combs", link: "/" , sublinkid :  "dog-grooming-brushes&combs"},
            { name: "Tick & Flea", link: "/" , sublinkid :  "dog-grooming-tick&flea"},
            { name: "Paw Care", link: "/" , sublinkid :  "dog-grooming-pawcare"},
            { name: "Dentangling Solutions", link: "/" , sublinkid :  "dog-grooming-detanglingsolution"},
          ],
        },
        {
          Head: "Toys",
          sublinksid : "dog-toys",
          sublink: [
            { name: "Chew Toys", link: "/", sublinkid :  "dog-toys-chewtoys"  },
            { name: "Plush Toys", link: "/" , sublinkid :  "dog-toys-plushtoys"},
            { name: "Balls", link: "/" , sublinkid :  "dog-toys-balls"},
            { name: "Interactive Toys", link: "/" , sublinkid :  "dog-toys-interactivetoys"},
            { name: "Tough Chewers", link: "/" , sublinkid :  "dog-toys-toughchewers"},
            { name: "Rope Toys", link: "/" , sublinkid :  "dog-toys-ropetoys"},

            ],
        },
        {
          Head: "Clothing",
          sublinksid : "dog-clothing",
          sublink: [
            { name: "Winter Wear", link: "/", sublinkid :  "dog-clothing-winterwear"  },
            { name: "Rian Coats", link: "/" , sublinkid :  "dog-clothing-raincoats"},
            { name: "Tshirts & Shirts", link: "/" , sublinkid :  "dog-clothing-tshirts&shirts"},
            { name: "Occasional Dresswear", link: "/" , sublinkid :  "dog-clothing-occasionaldresswears"},
            ],
        },
        
        {
          Head: "Bowls & Diner ",
          sublinksid : "dog-bowl-&-diner",
          sublink: [
            { name: "Steel Bowls", link: "/", sublinkid :  "dog-bowl-&-diner-steelbowls"  },
            { name: "Elevated Bowls", link: "/" , sublinkid :  "dog-bowl-&-diner-elevatedbowls"},
            { name: "Slow Feeders", link: "/" , sublinkid :  "dog-bowl-&-diner-slowfeeders"},
            { name: "Licki Mats", link: "/" , sublinkid :  "dog-bowl-&-diner-lickimats"},
            { name: "Anti Spills Mats", link: "/" , sublinkid :  "dog-bowl-&-diner-antispillmats"},

            ],
        },
        {
          Head: "Health & Hygiene ",
          sublinksid : "dog-health-&-hygiene",
          sublink: [
            { name: "Oral Care", link: "/", sublinkid :  "dog-health-&-hygiene-oralcare"  },
            { name: "Supplements", link: "/" , sublinkid :  "dog-health-&-hygiene-supplimemts"},
            { name: "Tick & Flea", link: "/" , sublinkid :  "dog-health-&-hygiene-tick&flea"},
            { name: "Stain & Odour", link: "/" , sublinkid :  "dog-health-&-hygiene-stain&odour"},
            { name: "Pee Lock Powder", link: "/" , sublinkid :  "dog-health-&-hygiene-peelockpowder"},


            ],
        },
        {
          Head: "Accessories",
          sublinksid : "dog-accessories",
          sublink: [
            { name: "Bow Ties & Bandanas", link: "/", sublinkid :  "dog-accessories-bowtie&bandanas"  },
            { name: "Party Accessories", link: "/" , sublinkid :  "dog-accessories-partyaccessories"},
            { name: "Shoes & Socks", link: "/" , sublinkid :  "dog-accessories-shoes&socks"},
            { name: "Personalised Accessories", link: "/" , sublinkid :  "dog-accessories-personalisedaccessories"},
            ],
        },
        {
          Head: "Travel",
          sublinksid : "dog-travel",
          sublink: [
            { name: "Ramps & Steps", link: "/", sublinkid :  "dog-travel-ramps&steps"  },
            { name: "Crates & Carriers ", link: "/" , sublinkid :  "dog-travel-crates&carriers"},
            ],
        },
        
      ],
    },
    {
      name: "Cat",
      submenu: true,
      id : "/cat-products",
      icon: CatIcon,
      sublinks: [
        {
          Head: "Food",
          sublinksid : "cat-food",
          sublink: [
            { name: "Dry Food", link: "/" , sublinkid :  "dry-cat-food"},            
            { name: "Wet Food", link: "/" , sublinkid :  "wet-cat-food"},
            { name: "Kitten Food", link: "/" , sublinkid :  "Kitten-Food"},
       
          ],
        },
        {
          Head: "Litter & Supplies",
          sublinksid : "cat-litter-&-supplies",
          sublink: [
            { name: "Litter", link: "/" , sublinkid :  "cat-litter-&-supplies-litter"},            
            { name: "Toilets & Trays", link: "/" , sublinkid :  "cat-litter-&-supplies-toilet-&-trays"},
            { name: "Scoopers", link: "/" , sublinkid :  "cat-litter-&-supplies-scoopers"},
            { name: "Odour", link: "/" , sublinkid :  "cat-litter-&-supplies-odour"},
          ],
        },
       
        {
          Head: "Treats",
          sublinksid : "cat-treats",
          sublink: [
            { name: "Natural Treats", link: "/" , sublinkid :  "cat-treats-naturaltreats"},            
            { name: "Creamy Treats", link: "/" , sublinkid :  "cat-treats-creamytreats"},
            { name: "All Treats", link: "/" , sublinkid :  "cat-treats-alltreats"},
            { name: "Medicated Treats", link: "/" , sublinkid :  "cat-treats-medicatedtreats"},

          ],
        },
        {
          Head: "Carriers",
          sublinksid : "cat-carriers",
          sublink: [
            { name: "Crates", link: "/" , sublinkid :  "cat-carriers-crates"},            
            { name: "Carriers", link: "/" , sublinkid :  "cat-carriers-carriers"},
            { name: "Bags", link: "/" , sublinkid :  "cat-carriers-bags"},
          ],
        },
        {
          Head: "Toys",
          sublinksid : "cat-toys",
          sublink: [
            { name: "Plush Toys", link: "/" , sublinkid :  "cat-toys-plushtoys"},            
            { name: "Interactive Toys", link: "/" , sublinkid :  "cat-toys-interactiveToys"},
            { name: "Catnip", link: "/" , sublinkid :  "cat-toys-catnip"},
            { name: "Stretcher", link: "/" , sublinkid :  "cat-toys-stretcher"},
            { name: "Teasers & Wands", link: "/" , sublinkid :  "cat-toys-teasers&wands"},            
          ],
        },
       
        {
          Head: "Groomings",
          sublinksid : "cat-grooming",
          sublink: [
            { name: "Shampoos", link: "/" , sublinkid :  "cat-grooming-shampoos"},            
            { name: "Towels", link: "/" , sublinkid :  "cat-grooming-towels"},
            { name: "Wipes", link: "/" , sublinkid :  "cat-grooming-wipes"},
            { name: "Stain & Odour", link: "/" , sublinkid :  "cat-grooming-stain&odour"},
            { name: "Tick & Flea", link: "/" , sublinkid :  "cat-grooming-tick&flea"},            
            { name: "Brushes", link: "/" , sublinkid :  "cat-grooming-brushes"},            

          ],
        },
        {
          Head: "Beddings",
          sublinksid : "cat-beddings",
          sublink: [
            { name: "Tents", link: "/" , sublinkid :  "cat-beddings-tents"},            
            { name: "Beds", link: "/" , sublinkid :  "cat-beddings-beds"},
            { name: "Mattress", link: "/" , sublinkid :  "cat-beddings-mattress"},
            { name: "Couches", link: "/" , sublinkid :  "cat-beddings-couches"},
          ],
        },
        {
          Head: "Collars & Accessories",
          sublinksid : "cat-collar&accessories",
          sublink: [
            { name: "Harness", link: "/" , sublinkid :  "cat-collar&accessories-harness"},            
            { name: "Bandanas", link: "/" , sublinkid :  "cat-collar&accessories-bandanas"},
          ],
        },
        {
          Head: "Dining",
          sublinksid : "cat-dining",
          sublink: [
            { name: "Cat Bowls", link: "/" , sublinkid :  "cat-dining-catbowls"},            
          ],
        },
      ],
    },
    {
      name: "Brands",
      submenu: true,
      id : "brands",
      icon: BrandIcon,
      sublinks: [
        {
          Head: "Brands",
          sublinksid : "brands",
          sublink: 
        [
          {
            name: "ALL4PETS",
            link: "brands-all4pets",
            logo: all4pets,
          },{
            name: "Acana",
            link: "brands-acana",
            logo: acana,
          },
          {
            name: "aj",
            link: "brands-americanjourney",
            logo: aj,
          },
          {
            name: "Arden Grange",
            link: "brands-ardengrange",
            logo: ardenGrange,
          },
          {
            name: "Bark Out Loud",
            link: "brands-barkoutloud",
            logo: barkOutLoud,
          },
          {
            name: "Basil",
            link: "brands-basil",
            logo: Basil,
          },
          {
            name: "Bio Pet Active",
            link: "brands-bipetactive",
            logo: BioPetActive,
          },
          {
            name: "Chip Chops",
            link: "brands-chipchor",
            logo: chipChops,
          },
          {
            name: "Dogaholic",
            link: "brands-dogaholic",
            logo: Dogaholic,
          },
          {
            name: "Drools",
            link: "brands-drools",
            logo: drools,
          },
          {
            name: "Dr.Pets",
            link: "brands-drpets",
            logo: DrPets,
          },
          {
            name: "Farmina N&D",
            link: "brands-farminal",
            logo: FarminaNnD,
          },
          {
            name: "Fidele",
            link: "brands-fidele",
            logo: Fidele,
          },
          {
            name: "Fido",
            link: "brands-fido",
            logo: Fido,
          },
          {
            name: "Gnawlers",
            link: "brands-gnawlers",
            logo: Gnawlers,
          },
          {
            name: "Hills",
            link: "brands-hills",
            logo: hills,
          },
          {
            name: "Kong",
            link: "brands-kong",
            logo: kong,
          },
          {
            name: "Nulo",
            link: "brands-nulo",
            logo: nulo,
          },
          {
            name: "Nutro",
            link: "brands-nutro",
            logo: nutro,
          },
          {
            name: "Pedigree",
            link: "brands-pedigree",
            logo: Pedigree,
          },
          {
            name: "Royal Canin",
            link: "brands-royalcannin",
            logo: royalCanin,
          },
          {
            name: "Trixie",
            link: "brands-trixie",
            logo: trixie,
          }
        ]}
      ],
    },
    {
      name: "Breeds",
      submenu: true,
      id : "/breed",
      icon: BreedIcon,
      sublinks: [
        {
          Head: "DOG",
          sublinksid : "dogbreed",
          sublink: [
            { name: "German Shepherd", link: "/" , sublinkid :  "German Shepherd"},            
            { name: "Golden Retriever", link: "/" , sublinkid :  "Golden Retriever"},
            { name: "Pug", link: "/" , sublinkid :  "Pug"},            
            { name: "Beagle", link: "/" , sublinkid :  "Beagle"},
            { name: "Husky", link: "/" , sublinkid :  "Husky"},
            { name: "Dalmatians", link: "/" , sublinkid :  "Dalmatians"},
            { name: "Pitbull", link: "/" , sublinkid :  "Pitbull"},            
            { name: "Pomeranian", link: "/" , sublinkid :  "Pomeranian"},
            { name: "Chihuahua", link: "/" , sublinkid :  "Chihuahua"},            
            { name: "Shih-Tzu", link: "/" , sublinkid :  "Shih-Tzu"},
            { name: "Labrador Retriever", link: "/" , sublinkid :  "Labrador Retriever"},
            { name: "Border Collie", link: "/" , sublinkid :  "Border Collie"},
            { name: "Rotwielier", link: "/" , sublinkid :  "Rotwielier"},            
            { name: "Cocker-Spaniel", link: "/" , sublinkid :  "Cocker-Spaniel"},
            { name: "Saint-Bernard", link: "/" , sublinkid :  "Saint-Bernard"},            
            { name: "Bulldog", link: "/" , sublinkid :  "Beagle"},
          ],
        },
        {
          Head: "Cat",
          sublinksid : "cat breed",
          sublink: [
            { name: "Bengal Cats", link: "/" , sublinkid :  "Bengal Cats"},            
            { name: "Persian Cats", link: "/" , sublinkid :  "Persian Cats"},
            { name: "Siamese Cats", link: "/" , sublinkid :  "Siamese Cats"},            
            { name: "The Maine Coon", link: "/" , sublinkid :  "The Maine Coon"},
            { name: "The Bombay Cats", link: "/" , sublinkid :  "The Bombay Cats"},
            { name: "Himalayan Cats", link: "/" , sublinkid :  "Himalayan Cats"},
            { name: "Exotic Short hair", link: "/" , sublinkid :  "Exotic Short hair"},            
            { name: "American Bobtail", link: "/" , sublinkid :  "American Bobtail"},
            { name: "Munchkin", link: "/" , sublinkid :  "Munchkin"},            
            { name: "Ragdoll", link: "/" , sublinkid :  "Ragdoll"},
            { name: "British Shorthair", link: "/" , sublinkid :  "British Shorthair"},

          ],
        },
     ],
    },

    {
      name: "Lifestage",
      submenu: true,
      id : "lifestage",
      icon: LifestageIcon,
      sublinks: [
        {
          Head: "DOG",
          sublinksid : "dog-lifestages",
          sublink: [
            { name: "Starter", link: "/" , sublinkid :  "Starter"},            
            { name: "Puppy", link: "/" , sublinkid :  "puppy"},
            { name: "Adult", link: "/" , sublinkid :  "adultdog"},            
          ],
        },
        {
          Head: "CAT",
          sublinksid : "cat-lifestages",
          sublink: [
            { name: "Kitten", link: "/" , sublinkid :  "kitten"},            
            { name: "Adult Cat", link: "/" , sublinkid :  "adultcat"},
          ],
        },
      ]
    },
  ]
  