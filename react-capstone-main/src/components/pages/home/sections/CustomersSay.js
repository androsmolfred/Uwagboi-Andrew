import CustomersSayCard from "./CustomersSayCard";

const testimonials = [
  {
    name: "Kim Hudson",
    star: 5,
    description: "Lorem upsume fendu de hey dop ddle deder opsom cunk"
  },
  {
    name: "Jan Hudson",
    star: 3,
    description: "Lorem upsume fendu de hey dop ddle deder opsom cunk"
  },
  {
    name: "Kourtney Feud",
    star: 5,
    description: "Lorem upsume fendu de hey dop ddle deder opsom cunk"
  },
  {
    name: "Lonzo Hilton",
    star: 5,
    description: "Lorem upsume fendu de hey dop ddle deder opsom cunk"
  },
  {
    name: "Ferdy Humpry",
    star: 1,
    description: "Lorem upsume fendu de hey dop ddle deder opsom cunk"
  },
]

function CustomersSay() {
    return (
     <article>
          <h1 className="customersSayTitle">Testimonials</h1>
          <section className="customersSay">
            {
              testimonials
                .sort((a,b) => a.star - b.star)
                .slice(0,3)
                .map(card => <CustomersSayCard key={card.name} {...card}/>)
            }
          </section>
      </article>
    );
  }

export default CustomersSay;
