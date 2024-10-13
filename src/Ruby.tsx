import { Fragment, useState } from "react";

export default function Ruby() {
    const a = `[O|wû]nc[e] w[h]en I w[a|á][s|z] si[x|ks] y[e|i][a]r[s|z] [o|ō]ld I saw [a|á] m[a|â]gnific[e|é]nt
pic[t|ch][u|ú]r[e] in [a|á] b[o|u][o]k, c[a|ö]ll[e]d Tr[u|ü][e] St[o|ö]ri[e][s|z] fr[o|ó]m N[a|ā][t|ch][u|ú]r[e], [a|á]bout
[t|d]h[e|é] pr[i|ī]m[e|ē]v[a|á]l f[o|ö]r[e|i]st. It w[a|á][s|z] [a|á] pic[t|ch][u|ú]r[e] [o|ó][f|v] [a|á] b[o|ō][a|á] c[o|ó]nstrict[o|ó]r in
[t|d]h[e|i] [a|â]ct [o|ó][f|v] sw[a|ä]ll[o|ō][w]ing [a|á]n [a|â]nim[a|á]l. H[e|i]r[e] i[s|z] [a|á] copy [o|ó][f|v] [t|d]h[e|é]
drawing.`;

    const b = `In [t|d]h[e|é] b[o|u][o]k it s[a|e][i]d: "B[o|ō][a|á] c[o|ó]nstrict[o|ó]r[s|z] sw[a|ä]ll[o|ō][w] [t|d]he[i]r prey
[w]h[o|ō]l[e], wi[t|d]hout ch[e|ü][w]ing it. [A|â]ft[e|é]r [t|d]h[a|â]t [t|d]hey [a|á]r[e] not [a|ā]bl[e] t[o|ó]
m[o|ü]v[e], [a|á]nd [t|d]hey sleep thr[o][u|ü][gh] [t|d]h[e|é] si[x|ks] m[o|û]nths [t|d]h[a|á]t [t|d]hey need
f[o|ó]r d[i|ī][g|j]es[ti|ch][o|ó]n."`;

    const c = `I pond[e|é]r[e]d deeply, [t|d]hen, [o|ō]v[e|é]r [t|d]h[e|é] [a|á]dven[t|ch][u|ú]r[e][s|z] [o|ó][f|v] [t|d]h[e|é]
j[u|û][n|ng]gl[e]. [A|á]nd [a|â]ft[e|é]r s[o|û]m[e] w[o|ë]rk wi[t|d]h [a|á] c[o|û]l[o|ó]r[e]d penc[i|í]l I
s[u|ú]cceed[e|i]d in m[a|ā]king m[y|ī] f[i|ë]rst drawing. M[y|ī] Drawing
N[u|û]mb[e|é]r [O|wû]n[e]. It l[o|u][o]k[e][d|t] s[o|û]m[e]thing l[i|ī]k[e] [t|d]his:`;

    const d = `I showed m[y|ī] m[a|â]st[e|é]rp[i|ï][e]c[e] t[o|ó] [t|d]h[e|é] gr[o|ō][w]n-ups, [a|á]nd asked
[t|d]h[e|é]m w[h]e[t|d]h[e|é]r [t|d]h[e|é] drawing fr[i|ī][gh]t[e|é]n[e]d [t|d]h[e|é]m. B[u|ú]t [t|d]hey
[a|â]ns[w][e|é]r[e]d: "Fr[i|ī][gh]t[e|é]n? W[h][y|ī] sh[o|ó][ul]d [a|e]ny [o|wû]n[e] b[e|i] fr[i|ī][gh]t[e|é]n[e]d b[y|ī]
[a|á] h[a|â]t?"`;

    const e = `M[y|ī] drawing w[a|á][s|z] not [a|á] pic[t|ch][u|ú]r[e] [o|ó][f|v] [a|á] h[a|â]t. It w[a|á][s|z] [a|á] pic[t|ch][u|ú]r[e]
[o|ó][f|v] [a|á] b[o|ō][a|á] c[o|ó]nstrict[o|ó]r d[i|ī][g|j]esting [a|á]n el[e|i][p|f][h][a|á]nt. B[u|ú]t sinc[e] [t|d]h[e|é]
gr[o|ō][w]n-ups w[e|é]r[e] not [a|ā]bl[e] t[o|ó] [u|û]nd[e|é]rst[a|â]nd it, I m[a|ā]d[e] [a|á]n[o|û][t|d]h[e|é]r
drawing: I dr[e|ü][w] [t|d]h[e|é] ins[i|ī]d[e] [o|ó][f|v] [a|á] b[o|ō][a|á] c[o|ó]nstrict[o|ó]r, s[o|ō] [t|d]h[a|á]t [t|d]h[e|é]
gr[o|ō][w]n-ups c[o|ó][ul]d see it cl[e|i][a]rly. [T|d]hey [a|ö]lway[s|z] need t[o|ó] h[a|á]v[e]
things [e|i][x|ks]pl[a|ā][i]n[e]d. M[y|ī] Drawing N[u|û]mb[e|é]r T[w][o|ü] l[o|u][o]k[e][d|t] l[i|ī]k[e]
[t|d]his:`;

    const [hide, toggleHide] = useState(false);

    return (
        <main className="english-gana">
            <h4>字母表</h4>
            <Alphabet />
            <button type="button" onClick={() => toggleHide(!hide)}>
                ToggleHide
            </button>
            <summary>
                <div>字母上面有一横表示字母表里的读音，比如 ā ē ī ō ū 分别对应 A E I O U</div>
                <div>字母上面有两点表示长音，比如 ä ï ö ü ë 分别对应 car ski dog flu nerd（ë 比较特别）</div>
                <div>
                    字母上面有一撇表示轻轻的 /ə/ 的发音，比如 water 里的 e 和 person 里的 o，而且 á é í ó ú 发音完全相同
                </div>
                <div>字母上面有三角用来表示 â û，分别对应 cat up</div>
                <div>下划线表示这些字母不发音，其余的是常见的字母组合发音</div>
            </summary>
            <Ipa />
            <EnglishGana s={a} hide={hide} />
            <br />
            <EnglishGana s={b} />
            <br />
            <EnglishGana s={c} />
            <br />
            <EnglishGana s={d} />
            <br />
            <EnglishGana s={e} />
        </main>
    );
}

export function Alphabet() {
    const list = [
        ["a", "[a|â]ppl[e]"], // o
        ["b", "blue"],
        ["c", "coat"],
        ["d", "down"],
        ["e", "el[e|i]ph[a|á]nt"],
        ["f", "fruit"],
        ["g", "g[a|ä]rb[a|i][g|j][e]"],
        ["h", "heyday"], // o
        ["i", "input"], // o
        ["j", "joy"],
        ["k", "k[e|ë]rn[e|é]l"],
        ["l", "law"],
        ["m", "m[o|ō]tiv[a|ā]t[e]"], // o
        ["n", "n[e|ē][i][t|d]h[e|é]r"], // o
        ["o", "o[x|ks][i|ī]d[e]"],
        ["p", "p[o|ö]rch"],
        ["q", "quick"],
        ["r", "r[a|â]nking"],
        ["s", "s[u|û]mm[e|é]r"],
        ["t", "toe"], // o
        ["u", "[u|û]nleash"], // o
        ["v", "v[a|â]c[u|ū][u]m"],
        ["w", "w[a|ö]t[e|é]rsk[i|ï]"],
        ["x", "xenon"],
        ["y", "y[o][u|ü]th"],
        ["z", "zookeep[e|é]r"], // o
    ];

    return (
        <section className="alphabet">
            {list.map((val, _) => {
                return (
                    <article key={val[0]}>
                        <div>{val[0]}</div>
                        <EnglishGana s={val[1]} />
                    </article>
                );
            })}
        </section>
    );
}

export function Ipa() {
    const ipaList = [
        ["a", "(a)", "", "", ""],
        ["ɪ", "i", "hit", "bit", "kid"],
        ["ʊ", "u", "put", "bush", "[s|sh]ug[a|á]r"],
        ["e", "e", "egg", "pet", "jet"],
        ["ɒ", "(o)", "not", "top", "hot"],

        ["ɑː", "ä", "c[a|ä]r", "f[a|ä][t|d]h[e|é]r", "w[a|ä]tch"],
        ["iː", "ï", "sk[i|ï]", "p[i|ï][e]c[e]", "f[i|ï][e]ld"],
        ["uː", "ü", "r[u|ü]by", "r[u|ü]l[e]", "s[u|ü]p[e|é]r"],
        ["ɔː", "ö", "d[o|ö]g", "b[o|ö]ss", "m[o|ö]r[e]"],

        ["ɜː", "ë", "p[e|ë]rs[o|ó]n", "p[e|ë]rf[e|i]ct", "n[e|ë]rd"],

        ["æ", "â", "c[a|â]t", "f[a|â]t", "h[a|â]t"],
        ["ʌ", "û", "[u|û]p", "l[u|û]ck", "sh[u|û]t"],

        ["eɪ", "ā", "t[a|ā]k[e]", "m[a|ā]k[e]", "l[a|ā]k[e]"],
        ["iː", "ē", "k[e|ē][y]", "p[e|ē][o]pl[e]", "s[e|ē][i]z[e]"],
        ["aɪ", "ī", "k[i|ī]t[e]", "l[i|ī]k[e]", "b[i|ī]k[e]"],
        ["əʊ", "ō", "n[o|ō]", "r[o|ō]p[e]", "h[o|ō]ld"],
        ["juː", "ū", "m[u|ū][s|z]ic", "[u|ū][s|z][e]", "c[u|ū][e]"],

        ["ɔɪ", "oi", "join", "voic[e]", "boy"],
        ["aʊ", "(au)", "out", "hous[e]", "now"],

        ["tʃ", "ch", "l[u|û]nch", "check", "chip"],
        ["dʒ", "j", "jet", "jog", "j[o|ō]ke"],
        ["θ", "th", "tooth", "th[e|ē]m[e]", "w[a|ö]rmth"],
        ["ð", "dh", "[t|d]hey", "[t|d]his", "we[a][t|d]h[e|é]r"],
        ["ʃ", "sh", "fish", "ship", "wish"],
        ["ʒ", "zh", "vi[si|zh][o|ó]n", "me[a][s|zh][u|ú]r[e]", "ple[a][s|zh][u|ú]r[e]"],
        ["j", "y", "yes", "yell", "y[a|ä]rd"],
        ["ŋ", "ng", "think", "sing[e|é]r", "fi[n|ng]g[e|é]r"],
    ];

    return (
        <section className="ipa-wrap">
            {ipaList.map((val, _) => {
                return (
                    <article key={val[1]}>
                        <div>
                            {val[1]}
                            <span className="ipa">/{val[0]}/</span>
                        </div>
                        <EnglishGana s={val[2]} />
                        <EnglishGana s={val[3]} />
                        <EnglishGana s={val[4]} />
                    </article>
                );
            })}
        </section>
    );
}

export function EnglishGana({ s, hide = false }: { s: string; hide?: boolean }) {
    const result = [];
    let rb = []; // also used for plain text
    let rt = [];
    let isRt = false;
    for (const ch of s) {
        switch (ch) {
            case "[":
                if (rb.length > 0) {
                    result.push(rb.join(""));
                    rb = [];
                }
                break;
            case "|":
                isRt = true;
                break;
            case "]":
                result.push(toRuby(rb.join(""), rt.join(""), hide));
                rb = [];
                rt = [];
                isRt = false;
                break;
            default:
                if (isRt) {
                    rt.push(ch);
                } else {
                    rb.push(ch);
                }
                break;
        }
    }
    if (rb.length > 0) {
        result.push(rb.join(""));
        rb = [];
    }

    console.log(result);

    return (
        <div className="ruby-wrap">
            {result.map((value, index) => {
                return <Fragment key={index}>{value}</Fragment>;
            })}
        </div>
    );
}

export function toRuby(rb: string, rt: string, hide: boolean): any {
    if (hide) {
        return rb;
    }

    if (rt.length <= 0) {
        return <u>{rb}</u>;
    }

    const upper = ["A", "E", "I", "O", "U"];
    const diacritic: any = {
        â: "a",
        ā: "a",
        ä: "a",
        ē: "e",
        ë: "e",
        ī: "i",
        ï: "i",
        ō: "o",
        ö: "o",
        û: "u",
        ū: "u",
        ü: "u",
        á: "a",
        é: "e",
        í: "i",
        ó: "o",
        ú: "u",
    };
    if (rt in diacritic && diacritic[rt] === rb.toLowerCase()) {
        if (upper.includes(rb)) {
            return rt.toUpperCase();
        }
        return rt;
    }

    return (
        <ruby>
            {rb}
            <rt>{rt}</rt>
        </ruby>
    );
}
