import { Typography } from "@mui/material";

export default function Clock({color, time}) {
    return (
        <Typography variant="h1" color={color}>
            {time}
        </Typography>
    )
}