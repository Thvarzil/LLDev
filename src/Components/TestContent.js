import React, {Component} from 'react';
import "./CSS/TestCSS.css";

//Component used only for testing "frosted glass" effects on main page content, as well as to test standardized
//CSS for components across website.

export default class TestContent extends Component {
    render() {

        return (

            <div className={"frosted main-content"}>

                <div className={"info"}>
                    <h3>Test Content</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, lectus in
                        convallis
                        posuere, nisl sem tempor metus, nec laoreet sapien mauris a ipsum. Curabitur sit amet
                        euismod nunc.
                        Fusce vitae lorem vel risus facilisis posuere id laoreet arcu. Duis aliquam at sem ac
                        porttitor. Ut
                        porttitor erat eros, sit amet scelerisque elit tempus sed. Nullam justo ex, aliquam sed eros
                        non,
                        interdum vehicula nisi. Nulla in diam ac nisl laoreet finibus sed eu nisl. Mauris dignissim
                        dui sed
                        mi feugiat, eget ullamcorper velit tristique. Sed semper nulla non neque porta elementum.
                        Maecenas
                        eget ipsum augue.
                    </p>
                    <p>
                        Cras lacinia nulla id diam varius vehicula. Mauris nec cursus ante, in volutpat ligula. In
                        hac
                        habitasse platea dictumst. Nullam ornare nulla quis dui interdum, eget tincidunt tortor
                        tristique.
                        Ut placerat tortor id massa tempor tincidunt. Donec finibus tempor fringilla. Integer justo
                        risus,
                        ultrices ut magna ut, fringilla consequat lacus. Aenean semper convallis tellus, et
                        facilisis lorem
                        egestas quis.
                    </p>
                </div>


            </div>
        )
    }
}