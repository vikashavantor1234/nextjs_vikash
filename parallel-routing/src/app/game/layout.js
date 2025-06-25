export default function GameLayout(props) {

    return <div id="gamesLayout">
        {props.children}
        {/* Players Page */}
        {props.players}
        {/* Teams Page */}
        {props.team}
    </div>
}