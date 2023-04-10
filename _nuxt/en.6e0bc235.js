const a={"website-name":n=>{const{normalize:e}=n;return e(["Fixed Subtitles"])},"website-description":n=>{const{normalize:e}=n;return e(["Fixed subtitles from fansub groups and streaming websites"])},"not-found":n=>{const{normalize:e}=n;return e(["The requested page was not found."])},"not-found-title":n=>{const{normalize:e}=n;return e(["Page not found"])},"contact-link":n=>{const{normalize:e}=n;return e(["Contact"])},wip:n=>{const{normalize:e}=n;return e(["Work in progress"])},"darkmode-tooltip":n=>{const{normalize:e}=n;return e(["Change color scheme"])},"locale-tooltip":n=>{const{normalize:e}=n;return e(["Change language"])},"code-tooltip":n=>{const{normalize:e}=n;return e([`Open project page
(you can download all subtitles there)`])},index:{headline:n=>{const{normalize:e}=n;return e(["Looking for fixed subtitles?"])},description:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Here you find ",o(r("totalFixedFiles"))," subtitles ready for download!"])},latest_updates:n=>{const{normalize:e}=n;return e(["Latest updates"])},actions:{browse:{title:n=>{const{normalize:e}=n;return e(["I'm looking for subtitles"])},description:n=>{const{normalize:e}=n;return e(["Find and download fixed subtitles"])},action:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Check all ",o(r("n"))," fixed shows"])}}},explainer:{title:n=>{const{normalize:e}=n;return e(["Why fixing subtitles?"])},time:n=>{const{normalize:e}=n;return e(["Sometimes the original translators can't fix those"])},time2:n=>{const{normalize:e}=n;return e(["Maybe they're too busy in other projects, retired from translating or even, in the case of streaming services, lost their licenses."])},opensource:n=>{const{normalize:e}=n;return e(["Many people can contribute"])},opensource2:n=>{const{normalize:e}=n;return e(["It's easy to oversee your own errors, but if with people help contributing it's possible to avoid those issues."])}}},contact:{title:n=>{const{normalize:e}=n;return e(["Contact"])},headline:n=>{const{normalize:e}=n;return e(["Found an error? Report it here. If you found an error in a subtitle or in this website tell us where we can find it. Remember to include an URL if it's possible."])},name:n=>{const{normalize:e}=n;return e(["Name (optional)"])},message:n=>{const{normalize:e}=n;return e(["Message"])},submit:n=>{const{normalize:e}=n;return e(["Submit"])},extra:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["You can also get in touch in ",o(r("project")),"."])},"extra-project":n=>{const{normalize:e}=n;return e(["the project page in GitHub"])},messages:{"missing-data":n=>{const{normalize:e}=n;return e(["Fill all inputs."])},submitting:n=>{const{normalize:e}=n;return e(["Submitting..."])},submitted:n=>{const{normalize:e}=n;return e(["Your message was sent."])},error:n=>{const{normalize:e}=n;return e(["An error happened while sending your message."])}}},"full-season":n=>{const{normalize:e,interpolate:o,named:r}=n;return e([o(r("seasonYear"))," ",o(r("season"))])},episodes:n=>{const{normalize:e,interpolate:o,named:r,plural:t}=n;return t([e(["0 episodes"]),e([o(r("n"))," episode"]),e([o(r("n"))," episodes"])])},show_list:n=>{const{normalize:e}=n;return e(["Show list"])},"data-source":n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Anime data provided by ",o(r("anilist")),". Project hosted at ",o(r("github")),". You can contribute by submitting pull requests."])},"pagination-text":n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["Page ",o(r("current"))," of ",o(r("total"))])},"select-group":n=>{const{normalize:e}=n;return e(["Select one of the groups above."])},"file-count":n=>{const{normalize:e,interpolate:o,named:r,plural:t}=n;return t([e(["No files"]),e([o(r("n"))," file"]),e([o(r("n"))," files"])])},"commit-count":n=>{const{normalize:e,interpolate:o,named:r,plural:t}=n;return t([e(["No commits"]),e([o(r("n"))," commit"]),e([o(r("n"))," commits"])])},"changed-lines-count":n=>{const{normalize:e,interpolate:o,named:r,plural:t}=n;return t([e(["No line fixed"]),e([o(r("n"))," line fixed"]),e([o(r("n"))," lines fixed"])])},"download-all":n=>{const{normalize:e}=n;return e(["Download all as zip"])},"report-error":n=>{const{normalize:e}=n;return e(["Report an error"])},show:n=>{const{normalize:e}=n;return e(["Show"])},season:n=>{const{normalize:e}=n;return e(["Season"])},last_update:n=>{const{normalize:e}=n;return e(["Last update"])},"download-modal":{title:n=>{const{normalize:e,plural:o}=n;return o([e(["Downloading file"]),e(["Downloading files"])])},"in-progress":n=>{const{normalize:e}=n;return e(["Please while until the download finishes."])},finished:n=>{const{normalize:e,plural:o}=n;return o([e(["Your download is finished. If you have access to original video from the group just save the subtitle to the video folder, otherwise you might need to open the subtitle manually and install"]),e(["Your download is finished. If you have access to original video from the group just save the subtitles to the videos folder, otherwise you might need to open the subtitles manually and install"])])},fonts:n=>{const{normalize:e,plural:o}=n;return o([e(["the following font:"]),e(["the following fonts:"])])},"font-variant-regular":n=>{const{normalize:e}=n;return e(["regular"])},"font-variant-bold":n=>{const{normalize:e}=n;return e(["bold"])},"font-variant-italic":n=>{const{normalize:e}=n;return e(["italic"])},"font-variant-bolditalic":n=>{const{normalize:e}=n;return e(["bold italic"])},"font-variant-and":n=>{const{normalize:e}=n;return e([" and "])},"font-variant-comma":n=>{const{normalize:e}=n;return e([", "])},download:n=>{const{normalize:e}=n;return e(["Download"])},cancel:n=>{const{normalize:e}=n;return e(["Cancel"])},close:n=>{const{normalize:e}=n;return e(["Close"])}},"commit-modal":{title:n=>{const{normalize:e}=n;return e(["Commit list"])},explainer:n=>{const{normalize:e,plural:o}=n;return o([e(["Below is the commit that fixed the subtitles. You can open it to check what was been changed."]),e(["Those were the commits that fixed the files, some fix one file, some fix many. You can open them to check what was been changed by each one."])])},date:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(["published at ",o(r("date"))])},close:n=>{const{normalize:e}=n;return e(["Close"])}},"group-list":{filename:n=>{const{normalize:e}=n;return e(["File name"])},modified:n=>{const{normalize:e}=n;return e(["Last modified"])},changedLines:n=>{const{normalize:e}=n;return e(["Fixed lines"])}},seasons:{SPRING:n=>{const{normalize:e}=n;return e(["Spring"])},SUMMER:n=>{const{normalize:e}=n;return e(["Summer"])},FALL:n=>{const{normalize:e}=n;return e(["Fall"])},WINTER:n=>{const{normalize:e}=n;return e(["Winter"])}},formats:{TV:n=>{const{normalize:e}=n;return e(["TV"])},TV_SHORT:n=>{const{normalize:e}=n;return e(["Short"])},MOVIE:n=>{const{normalize:e}=n;return e(["Movie"])},SPECIAL:n=>{const{normalize:e}=n;return e(["Special"])},OVA:n=>{const{normalize:e}=n;return e(["OVA"])},ONA:n=>{const{normalize:e}=n;return e(["ONA"])},MUSIC:n=>{const{normalize:e}=n;return e(["Music Video"])}},languages:{en:n=>{const{normalize:e}=n;return e(["English"])},"en-us":n=>{const{normalize:e}=n;return e(["American English"])},pt:n=>{const{normalize:e}=n;return e(["Portuguese"])},"pt-br":n=>{const{normalize:e}=n;return e(["Brazilian Portuguese"])},"pt-pt":n=>{const{normalize:e}=n;return e(["European Portuguese"])},es:n=>{const{normalize:e}=n;return e(["Spanish"])},"es-la":n=>{const{normalize:e}=n;return e(["Latin American Spanish"])},"es-es":n=>{const{normalize:e}=n;return e(["European Spanish"])}},search:{button:n=>{const{normalize:e}=n;return e(["Search"])},label:n=>{const{normalize:e}=n;return e(["Search"])},placeholder:n=>{const{normalize:e}=n;return e(["Search subtitles..."])},title:n=>{const{normalize:e,interpolate:o,named:r}=n;return e(['Searching for "',o(r("query")),'"'])},not_found:n=>{const{normalize:e}=n;return e(["Nothing was found :/"])}}};export{a as default};
