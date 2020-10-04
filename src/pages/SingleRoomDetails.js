import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { ROUTES } from "../routes";
//import defaultImg from "../images/room-1.jpeg";
import DynamicHero from "../components/DynamicHero";
import { RoomContext } from "../context/RoomContext";

export class SingleRoomDetails extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
    };
  }
  static contextType = RoomContext;

  componentDidMount() {
    //   console.log(this.props);
  }

  render() {
    const { getSingleRoom } = this.context;
    const room = getSingleRoom(this.state.slug);

    // if room not fetched/in context
    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to={ROUTES.ROOMS} className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    // if room is fetched/in context
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    // const [mainimage, ...defaultImages] = images;
    // console.log(defaultImages)
    function genRandom() {
      const random = Math.floor(Math.random() * images.length);
      return random;
    }

    return (
      <>
        <DynamicHero imgHero={images[genRandom()]}>
          <Banner title={`${name} room`}>
            <Link to={ROUTES.ROOMS} className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </DynamicHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
        </section>
        <section className="single-room">
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SqFt</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.extra.map((item, index) => (
              <li key={index}>+ {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoomDetails;
