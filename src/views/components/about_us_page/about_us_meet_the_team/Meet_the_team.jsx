import { useEffect, useState } from "react";
import CardDetail from "./CardDetail";
import { expand_team_members_data as team_members } from "./about_us_team_data/people_data";

function Meet_the_team() {
  const [width, setWidth] = useState(window.innerWidth);
  const [cardItem, setCardItem] = useState({});
  const [cardOpen, setCardOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [divClickedIndex, setDivClickedIndex] = useState(-1);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let chunkSize = width < 768 ? team_members.length : width < 1024 ? 2 : 4;

  const people_array =
    team_members?.map((item) => ({
      image_url: item?.image_url,
      name: item?.name,
      position: item?.position,
      description: item?.description,
      id: item?.id,
      links: item.links
        ? item?.links.map((link) => ({
            type: link.type,
            link: link.url,
          }))
        : [],
    })) || [];

  const chunkArray = (array, size) => {
    return array.reduce((acc, _, index) => {
      if (index % size === 0) {
        acc.push(array.slice(index, index + size));
      }
      return acc;
    }, []);
  };

  const groupedPeople = chunkArray(people_array, chunkSize);

  return (
    <div>
      {groupedPeople.map((items, i) => (
        <>
          <div className="team_members_image" key={i}>
            {items.map((item, index) => (
              <>
                <div
                  className="team_member_container"
                  key={item.id}
                  onClick={() => {
                    if (clickedIndex === index && divClickedIndex === i) {
                      setCardOpen(!cardOpen);
                      setClickedIndex(-1);
                      setDivClickedIndex(-1);
                    } else {
                      setCardItem(item);
                      setClickedIndex(index);
                      setDivClickedIndex(i);
                      setCardOpen(true);
                    }
                  }}
                >
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="team_member_image"
                  />
                  <div className="team_member_description">
                    <p className="team_member_name">{item.name}</p>
                    <p className="team_member_position">{item.position}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          {cardOpen && clickedIndex !== -1 && divClickedIndex === i && (
            <CardDetail
              cardItem={cardItem}
              divClickedIndex={divClickedIndex}
              clickedIndex={clickedIndex}
            />
          )}
        </>
      ))}
    </div>
  );
}

export default Meet_the_team;
