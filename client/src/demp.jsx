import './demo.css';
import * as React    from 'react';
import SectionsContainer from './components/SectionsContainer'
import Section from './components/Section'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage/Homepage'
const app = document.querySelector('#app');

class Example extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        current: 0,
      }
    }

    render() {
        const options = {
            sectionClassName: 'section',
            anchors: ['about', 'sectionTwo', 'sectionThree'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation: true,
            scrollCallback: (states) => this.setState({current: states.activeSection})
        };

        const {current} = this.state

        return (
            <div>
                <Header>
                    <a href="#sectionOne" className="opa">Section One</a>
                    <a href="#sectionTwo">Section Two</a>
                    <a href="#sectionThree">Section Three</a>
                </Header>
                <Footer>
                    <a href="">Dcoumentation</a>
                    <a href="">Example Source</a>
                    <a href="">About</a>
                </Footer>
                <SectionsContainer className="container" {...options} activeSection={current}>
                    <Section className="custom-section" verticalAlign="true" color="#69D2E7"><Homepage /></Section>
                    <Section color="#A7DBD8"><div><h1>page 2</h1></div></Section>
                    <Section color="#E0CC">Page 3</Section>
                    <Section color="#E0E4aa">Page 4</Section>
                    <Section color="#E0f4aa">Page 5</Section>
                </SectionsContainer>
                

                <div className="btnGroup">
                    <button onClick={() => this.setState({current: current - 1})} disabled={current === 0}>pre</button>
                    <button onClick={() => this.setState({current: current + 1})} disabled={current === 2}>next</button>
                </div>
            </div>
        )
    }
}

export default Example
