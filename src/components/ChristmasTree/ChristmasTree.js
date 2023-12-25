import "./styles.css"
const ChristmasTree = () => {
    const renderTreeElements = () => {
        const treeElements = [];
        for (let i = 1; i <= 10; i++) {
            treeElements.push(
                <div className="tree__ring" style={{ '--index': `${i}` }} key={i}>
                    <div className="tree__bauble"></div>
                    <div className="tree__bauble"></div>
                </div>
            );
        }
        return treeElements;
    };

    return (
        <div className="tree">
            <svg className="tree__star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.32 108.44" style={{ '--delay': '0' }}>
                <path d="M90.19 104.33L57.12 87.38 24.4 105l5.91-36.69L3.44 42.65l36.72-5.72 16.1-33.5L73.06 36.6l36.83 4.97-26.35 26.21z" fill="none" strokeWidth="6.88" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            {renderTreeElements()}
        </div>
    );
};

export default ChristmasTree;
