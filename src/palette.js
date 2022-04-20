import React, {Component} from "react";
import ColorBox from "./colorBox";
import './palette.css';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => <ColorBox 
            background={color.color}
            name={color.name}
            />);
        console.log(colorBoxes);
        return (
            <div className="Palette">
    
                <div className="Palette-Colors">
                    {colorBoxes}
                </div>
    
            </div>
        )
    }
}

export default Palette;