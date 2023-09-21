

const Project = () => {
    return (
        <>
            {/* PLACEHOLDER */}
            <div className="project">
                <div className="project__details">
                    <p>ExtraExtra is a central hub for Canadians to access news from reputable sources across Canada and beyond. It was developed in response to the fallout from the federal government's passage of the <a href="https://www.canada.ca/en/canadian-heritage/services/online-news.html">"Online News Act"</a> in July, 2023. The law requires major tech companies, namely Meta and Google, to compensate news outlets for the use of their content. In response, Meta decided to prohibit Canadian news publishers from sharing their content on popular social media platforms like Instagram, Threads, and Facebook. Google has threatened similar action once the law comes into effect this December.</p>

                    <p>This unprecedented ban by Meta has led to a critical gap in Canadians' access to news, leaving many unaware of current events. ExtraExtra steps in as a quick solution, offering a user-friendly platform where individuals can swiftly access up-to-date Canadian news from reputable sources with direct links to the articles. With ExtraExtra, users can stay informed, bridging the gap left by the ban and ensuring that essential news remains easily accessible to all Canadians.</p>
                </div>

                <div className="project__links">
                    <h2>Learn More</h2>
                    <ul>
                        <li className="link">
                            <a href="https://www.theglobeandmail.com/podcasts/the-decibel/article-australia-resolved-its-news-standoff-with-meta-could-canada/">PODCAST - Australia resolved its news standoff with Meta. Could Canada?</a>
                            {/* Source: The Decibel (Globe and Mail) */}
                            {/* Date: September 12, 2023 */}
                        </li>

                        <li className="link">
                            <a href="https://www.cbc.ca/radio/frontburner/how-meta-s-news-ban-is-affecting-canadians-1.6945653">PODCAST - How Meta's news ban is affecting Canadians
                            </a>
                            {/* Source: Front Burner (CBC) */}
                            {/* Date: August 24, 2023 */}
                        </li>

                        <li className="link">
                            <a href="https://www.thestar.com/business/most-canadians-view-about-online-news-act-is-news-should-be-free-survey-suggests/article_6d30cec3-1439-5506-be93-6896a4529631.html">Most Canadians view about Online News Act is news should be free, survey suggests
                            </a>
                            {/* Source: Toronto Star */}
                            {/* Date: September 20, 2023 */}
                        </li>

                        <li className="link">
                            <a href="https://www.nytimes.com/2023/08/02/business/media/meta-news-in-canada.html">Meta Begins Blocking News in Canada
                            </a>
                            {/* Source: New York Times */}
                            {/* Date: August 2, 2023 */}
                        </li>

                        <li className="link">
                            <a href="https://www.nbcnews.com/tech/internet/instagram-facebook-block-news-canada-online-act-desert-rcna98225">Instagram and Facebook are blocking news in Canada. This is what a ‘news desert’ could look like.
                            </a>
                            {/* Source: NBC News */}
                            {/* Date: August 4, 2023 */}
                        </li>

                    </ul>
                </div>

                {/* 
                is there a call-to-action we can share with people?

                <div className="project__take-action">

                </div> 
                */}
            </div>
        </>
    );
};

export default Project;