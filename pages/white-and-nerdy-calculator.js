import {useEffect} from "react";

const White = () => {
    var calculate;
    useEffect(() => {
        calculate = () => {
            const checks = document.getElementById("form").children[0].children;
            var checked = 0;
            var total = 0;
            for (var i = 0; i < checks.length; i++) {
                var child = checks[i];
                if (child.type == "checkbox") {
                    total += 1;
                }
                if (child.checked) {
                    checked += 1;
                }
            }

            var percent = checked / total * 100;
            percent = Math.round(percent * 100) / 100;
            document.getElementById("form").innerText = (
                "You are " + percent + "% white and nerdy!"
            )
            console.log("YOU ARE " + percent + " PERCENT WHITE 'N' NERDY");
        }
        document.getElementById("button").onclick = calculate;
    }, []);

    return (
        <div id = "wrapper" style = {{padding: "10px"}}>
            <h1>
                How White and Nerdy are you?
            </h1>

            <div id = "form">
                Do you...
                <form>
                         <input type="checkbox"/> Mow your front lawn?
                    <br/><input type="checkbox"/> Want to roll with the gangsters?
                    <br/><input type="checkbox"/> Place first in your class?
                    <br/><input type="checkbox"/> Go to MIT?
                    <br/><input type="checkbox"/> Excel at D&D?
                    <br/><input type="checkbox"/> Enjoy the art of MC Escher?
                    <br/><input type="checkbox"/> Enjoy Earl Grey tea?
                    <br/><input type="checkbox"/> Have stationary rims on your tires?
                    <br/><input type="checkbox"/> Have exclusively cherry action figures?
                    <br/><input type="checkbox"/> Own books written by Stephen Hawking?
                    <br/><input type="checkbox"/> Have a pimped-out MySpace page?
                    <br/><input type="checkbox"/> Know Pi to a thousand places?
                    <br/><input type="checkbox"/> Wear braces?
                    <br/><input type="checkbox"/> Have mayonnaise on all your sandwiches?
                    <br/><input type="checkbox"/> Play Minesweeper?
                    <br/><input type="checkbox"/> Amaze people with your fast fingers?
                    <br/><input type="checkbox"/> Excel at Pascal?
                    <br/><input type="checkbox"/> Excel at vector calculus?
                    <br/><input type="checkbox"/> Love the theme song of Happy Days?
                    <br/><input type="checkbox"/> Kick butt at ping pong?
                    <br/><input type="checkbox"/> Excel at trivia?
                    <br/><input type="checkbox"/> Excel in JavaScript programming?
                    <br/><input type="checkbox"/> Speak Klingon?
                    <br/><input type="checkbox"/> Ride a segway?
                    <br/><input type="checkbox"/> Own an X-Men comic?
                    <br/><input type="checkbox"/> Use pocket protectors?
                    <br/><input type="checkbox"/> Own an ergonomic keyboard?
                    <br/><input type="checkbox"/> Own CD-RWs?
                    <br/><input type="checkbox"/> Edit Wikipedia?
                    <br/><input type="checkbox"/> Know quotes from the Holy Grail?
                    <br/><input type="checkbox"/> Program projects for your friends?
                    <br/><input type="checkbox"/> Have made a website?
                    <br/><input type="checkbox"/> Own a fanny pack?
                    <br/><input type="checkbox"/> Shop at the GAP?
                    <br/><input type="checkbox"/> Enjoy bubble wrap?
                    <br/><input type="checkbox"/> Participate in AV club?
                    <br/><input type="checkbox"/> Participate in Glee club?
                    <br/><input type="checkbox"/> Participate in chess club?
                    <br/><input type="checkbox"/> Like either Kirk or Picard?
                    <br/><input type="checkbox"/> Go to the Renaissance Faire?
                    <br/><input type="checkbox"/> Have your name on your underwear?
                </form>

                <br/><button id = "button">Calculate!</button>
            </div>
        </div>
    )
}

export default White;