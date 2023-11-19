/* eslint-disable no-unused-vars */
// mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Sellers({ image, imageHeight }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={imageHeight}
          image={image}
          alt="green iguana"
          className=" img-fluid "
        />
        <CardContent className=" text-start ">
          <Typography gutterBottom variant="h6" component="div">
            FLORAL JACKQUARD
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className=" lh-lg "
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <div className="d-flex justify-content-between align-items-center ">
            <div>$120.00 $80.00</div>
            <div style={{ padding: "10px 0" }}>
              <StarBorderOutlinedIcon style={{ color: "gold" }} />
              <StarBorderOutlinedIcon style={{ color: "gold" }} />
              <StarBorderOutlinedIcon style={{ color: "gold" }} />
              <StarBorderOutlinedIcon style={{ color: "gold" }} />
              <StarBorderOutlinedIcon style={{ color: "gold" }} />
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
