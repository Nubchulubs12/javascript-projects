export default function HobbyLinks() {
    let hobbyLinks = [
        "https://www.google.com/",
        "https://www.youtube.com/"
    ];
    return (
        <div style={{ textAlign: 'right' }}>
        <a href={hobbyLinks[0]}>Google</a><br />
        <a href={hobbyLinks[1]}>YouTube</a>
        
        </div>
        
    );
};