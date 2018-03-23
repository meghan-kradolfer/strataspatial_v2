import React from "react";
import Animate from 'react-move/Animate';

class Enquire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tooltip: false };
    }
    render() {
        return (
            <section id="enquire" className="enquire">
                <div className="container">
                    <h1 className={`logo small`} onMouseEnter={() => this.setState({ tooltip: true })} onMouseLeave={() => this.setState({ tooltip: false })}>
                        <a href="mailto:&#106;&#117;&#108;&#105;&#097;&#064;&#115;&#116;&#114;&#097;&#116;&#097;&#115;&#112;&#097;&#116;&#105;&#097;&#108;&#046;&#099;&#111;&#109;?subject=Enquiry from website">&#106;&#117;&#108;&#105;&#097;&#064;&#115;&#116;&#114;&#097;&#116;&#097;&#115;&#112;&#097;&#116;&#105;&#097;&#108;&#046;&#099;&#111;&#109;</a>
                    </h1>
                    <Animate show={this.state.tooltip}
                        start={{ opacity: 0 }}
                        enter={{ opacity: [1], timing: { duration: 300 } }}
                        leave={{ opacity: [0], timing: { duration: 300 } }}>
                        {({ opacity }) => <span style={{ opacity }} className="tooltip">Get in touch!</span>}
                    </Animate>
                </div>
            </section>
        )
    }
}

export default Enquire;