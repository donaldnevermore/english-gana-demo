import { Fragment, useState } from "react";

export default function Ruby() {
    const a = `[O]{wû}n[c]{s}[e]{} w[h]{}en I w[a]{ó}[s]{z} si[x]{ks} y[e]{i}[a]{}r[s]{z} [o]{ō}ld I s[a]{ö}[w]{} [a]{ó} m[a]{â}gnifi[c]{s}[e]{ó}nt
pic[t]{ch}[u]{ó}r[e]{} in [a]{ó} b[o]{u}[o]{}k, c[a]{ö}ll[e]{}d Tr[u]{ü}[e]{} St[o]{ö}ri[e]{}[s]{z} fr[o]{ó}m N[a]{ā}[t]{ch}[u]{ó}r[e]{}, [a]{ó}bout
[t]{d}h[e]{ó} pr[i]{ī}m[e]{ï}v[a]{ó}l f[o]{ö}r[e]{i}st. It w[a]{ó}[s]{z} [a]{ó} pic[t]{ch}[u]{ó}r[e]{} [o]{ó}[f]{v} [a]{ó} b[o]{ō}[a]{ó} c[o]{ó}nstrict[o]{ó}r in
[t]{d}h[e]{i} [a]{â}ct [o]{ó}[f]{v} sw[a]{ä}ll[o]{ō}[w]{}ing [a]{ó}n [a]{â}nim[a]{ó}l. H[e]{i}r[e]{} i[s]{z} [a]{ó} copy [o]{ó}[f]{v} [t]{d}h[e]{ó}
dr[a]{ö}[w]{}ing.`;

    const b = `In [t]{d}h[e]{ó} b[o]{u}[o]{}k it s[a]{e}[i]{}d: "B[o]{ō}[a]{ó} c[o]{ó}nstrict[o]{ó}r[s]{z} sw[a]{ä}ll[o]{ō}[w]{} [t]{d}he[i]{}r prey
[w]{}h[o]{ō}l[e]{}, wi[t]{d}hout ch[e]{ü}[w]{}ing it. [A]{â}ft[e]{ó}r [t]{d}h[a]{â}t [t]{d}hey [a]{ó}r[e]{} not [a]{ā}bl[e]{} t[o]{ó}
m[o]{ü}v[e]{}, [a]{ó}nd [t]{d}hey sl[e]{ï}[e]{}p thr[o]{}[u]{ü}[gh]{} [t]{d}h[e]{ó} si[x]{ks} m[o]{û}nths [t]{d}h[a]{ó}t [t]{d}hey n[e]{ï}[e]{}d
f[o]{ó}r d[i]{ī}[g]{j}es[ti]{ch}[o]{ó}n."`;

    const c = `I pond[e]{ó}r[e]{}d d[e]{ï}[e]{}ply, [t]{d}hen, [o]{ō}v[e]{ó}r [t]{d}h[e]{i} [a]{ó}dven[t]{ch}[u]{ó}r[e]{}[s]{z} [o]{ó}[f]{v} [t]{d}h[e]{ó}
j[u]{û}[n]{ng}gl[e]{}. [A]{â}nd [a]{â}ft[e]{ó}r s[o]{û}m[e]{} w[o]{ë}rk wi[t]{d}h [a]{ó} c[o]{û}l[o]{ó}r[e]{}d pen[c]{s}[i]{ó}l I
s[u]{ó}c[c]{s}[e]{ï}[e]{}d[e]{i}d in m[a]{ā}king m[y]{ī} f[i]{ë}rst dr[a]{ö}[w]{}ing. M[y]{ī} Dr[a]{ö}[w]{}ing
N[u]{û}mb[e]{ó}r [O]{wû}n[e]{}. It l[o]{u}[o]{}k[e]{}[d]{t} s[o]{û}m[e]{}thing l[i]{ī}k[e]{} [t]{d}his:`;

    const d = `I sh[o]{ō}[we]{}d m[y]{ī} m[a]{â}st[e]{ó}rp[i]{ï}[e]{}[c]{s}[e]{} t[o]{ó} [t]{d}h[e]{ó} gr[o]{ō}[w]{}n-ups, [a]{ó}nd [a]{â}sk[e]{}[d]{t}
[t]{d}h[e]{ó}m w[h]{}e[t]{d}h[e]{ó}r [t]{d}h[e]{ó} dr[a]{ö}[w]{}ing fr[i]{ī}[gh]{}t[e]{ó}n[e]{}d [t]{d}h[e]{ó}m. B[u]{û}t [t]{d}hey
[a]{â}ns[w]{}[e]{ó}r[e]{}d: "Fr[i]{ī}[gh]{}t[e]{ó}n? W[h]{}[y]{ī} sh[o]{ó}[ul]{}d [a]{e}ny [o]{wû}n[e]{} b[e]{i} fr[i]{ī}[gh]{}t[e]{ó}n[e]{}d b[y]{ī}
[a]{ó} h[a]{â}t?"`;

    const e = `M[y]{ī} dr[a]{ö}[w]{}ing w[a]{ó}[s]{z} not [a]{ó} pic[t]{ch}[u]{ó}r[e]{} [o]{ó}[f]{v} [a]{ó} h[a]{â}t. It w[a]{ó}[s]{z} [a]{ó} pic[t]{ch}[u]{ó}r[e]{}
[o]{ó}[f]{v} [a]{ó} b[o]{ō}[a]{ó} c[o]{ó}nstrict[o]{ó}r d[i]{ī}[g]{j}esting [a]{ó}n el[e]{i}[p]{f}[h]{}[a]{ó}nt. B[u]{û}t sin[c]{s}[e]{} [t]{d}h[e]{ó}
gr[o]{ō}[w]{}n-ups w[e]{ó}r[e]{} not [a]{ā}bl[e]{} t[o]{u} [u]{û}nd[e]{ó}rst[a]{â}nd it, I m[a]{ā}d[e]{} [a]{ó}n[o]{û}[t]{d}h[e]{ó}r
dr[a]{ö}[w]{}ing: I dr[e]{ü}[w]{} [t]{d}h[e]{i} ins[i]{ī}d[e]{} [o]{ó}[f]{v} [a]{ó} b[o]{ō}[a]{ó} c[o]{ó}nstrict[o]{ó}r, s[o]{ō} [t]{d}h[a]{ó}t [t]{d}h[e]{ó}
gr[o]{ō}[w]{}n-ups c[o]{ó}[ul]{}d s[e]{ï}[e]{} it cl[e]{i}[a]{}rly. [T]{d}hey [a]{ö}lw[a]{ā}[y]{}[s]{z} n[e]{ï}[e]{}d t[o]{ó} h[a]{ó}v[e]{}
things [e]{i}[x]{ks}pl[a]{ā}[i]{}n[e]{}d. M[y]{ī} Dr[a]{ö}[w]{}ing N[u]{û}mb[e]{ó}r T[w]{}[o]{ü} l[o]{u}[o]{}k[e]{}[d]{t} l[i]{ī}k[e]{}
[t]{d}his:`;

    const [hide, toggleHide] = useState(false);

    return (
        <main className="english-gana">
            <h4>字母表</h4>
            <Alphabet />
            {/* <button type="button" onClick={() => toggleHide(!hide)}>
                ToggleHide
            </button> */}
            <summary>
                <div>字母上面有一横表示字母表里的读音，比如 ā ē ī ō ū 分别对应 A E I O U</div>
                <div>字母上面有两点表示长音，比如 ä ï ö ü ë 分别对应 car ski dog flu nerd（ë 比较特别）</div>
                <div>
                    字母上面有一撇表示轻轻的 /ə/ 的发音，比如 water 里的 e 和 person 里的 o，而且 á é í ó ú 发音相同
                </div>
                <div>字母上面有三角用来表示 â û，分别对应 cat up</div>
                <div>下划线表示这些字母不发音</div>
            </summary>
            <Ipa />
            <EnglishGana s={a} hide={hide} />
            <br />
            <EnglishGana s={b} />
            <br />
            <EnglishGana s={c} />
            <br />o
            <EnglishGana s={d} />
            <br />
            <EnglishGana s={e} />
        </main>
    );
}

export function Alphabet() {
    const list = [
        ["a", "[a]{â}ppl[e]{}"],
        ["b", "boy"],
        ["c", "c[a]{â}t"],
        ["d", "d[o]{ö}g"],
        ["e", "egg"],
        ["f", "fish"],
        ["g", "g[i]{ë}rl"],
        ["h", "hous[e]{}"],
        ["i", "input"],
        ["j", "join"],
        ["k", "k[i]{ī}t[e]{}"],
        ["l", "l[u]{û}nch"],
        ["m", "m[u]{yü}[s]{z}ic"],
        ["n", "n[e]{ï}[e]{}d"],
        ["o", "o[x]{ks}"],
        ["p", "p[e]{ë}rs[o]{ó}n"],
        ["q", "quick"],
        ["r", "r[u]{ü}by"],
        ["s", "sk[i]{ï}"],
        ["t", "t[o]{ü}[o]{}th"],
        ["u", "[u]{û}pd[a]{ā}t[e]{}"],
        ["v", "vow[e]{ó}l"],
        ["w", "we[a]{}[t]{d}h[e]{ó}r"],
        ["x", "xenon"],
        ["y", "y[a]{ä}rd"],
        ["z", "z[e]{i}r[o]{ō}"],
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
        ["ʊ", "u", "put", "bush", "[s]{sh}ug[a]{ó}r"],
        ["e", "e", "egg", "pet", "jet"],
        ["ɒ", "o", "not", "top", "hot"],

        ["ɑː", "ä", "c[a]{ä}r", "f[a]{ä}r", "w[a]{ä}[t]{}ch"],
        ["iː", "ï", "sk[i]{ï}", "p[i]{ï}[e]{}[c]{s}[e]{}", "f[i]{ï}[e]{}ld"],
        ["uː", "ü", "r[u]{ü}by", "fr[u]{ü}[i]{}t", "s[u]{ü}p[e]{ó}r"],
        ["ɔː", "ö", "d[o]{ö}g", "f[o]{ö}rk", "m[o]{ö}r[e]{}"],

        ["ɜː", "ë", "p[e]{ë}rs[o]{ó}n", "p[e]{ë}rf[e]{i}ct", "n[e]{ë}rd"],

        ["æ", "â", "c[a]{â}t", "f[a]{â}t", "h[a]{â}t"],
        ["ʌ", "û", "[u]{û}p", "l[u]{û}ck", "sh[u]{û}t"],

        ["eɪ", "ā", "t[a]{ā}k[e]{}", "m[a]{ā}k[e]{}", "l[a]{ā}k[e]{}"],
        ["iː", "ē", "n[e]{ï}[e]{}d", "f[e]{ï}[e]{}d", "m[e]{ï}[e]{}t"],
        ["aɪ", "ī", "k[i]{ī}t[e]{}", "l[i]{ī}k[e]{}", "b[i]{ī}k[e]{}"],
        ["əʊ", "ō", "n[o]{ō}", "r[o]{ō}p[e]{}", "h[o]{ō}ld"],
        ["juː", "ū", "m[u]{yü}[s]{z}ic", "[u]{yü}[s]{z}[e]{}", "c[u]{yü}[e]{}"],

        ["ɔɪ", "oi", "join", "voi[c]{s}[e]{}", "boy"],
        ["aʊ", "(au)", "out", "hous[e]{}", "now"],

        ["tʃ", "ch", "l[u]{û}nch", "check", "chip"],
        ["dʒ", "j", "jet", "jog", "j[o]{ō}ke"],
        ["θ", "th", "t[o]{ü}[o]{}th", "th[e]{ï}m[e]{}", "w[a]{ö}rmth"],
        ["ð", "dh", "[t]{d}hey", "[t]{d}his", "we[a]{}[t]{d}h[e]{ó}r"],
        ["ʃ", "sh", "fish", "ship", "wish"],
        ["ʒ", "zh", "vi[si]{zh}[o]{ó}n", "me[a]{}[s]{zh}[u]{ó}r[e]{}", "ple[a]{}[s]{zh}[u]{ó}r[e]{}"],
        ["j", "y", "yes", "yell", "y[a]{ä}rd"],
        ["ŋ", "ng", "thing", "thi[n]{ng}k", "fi[n]{ng}ger"],
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
    let rb = [];
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
            case "]":
                break;
            case "{":
                isRt = true;
                break;
            case "}":
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

    if (rt === "ï" && rb.toLowerCase() === "e") {
        const ch = "ē";
        return rb === "e" ? ch : ch.toUpperCase();
    }
    if (rt === "yü" && rb.toLowerCase() === "u") {
        const ch = "ū";
        return rb === "u" ? ch : ch.toUpperCase();
    }

    const upper = { A: 0, E: 0, I: 0, O: 0, U: 0 };
    const schwa: any = {
        a: "á",
        e: "é",
        i: "í",
        o: "ó",
        u: "ú",
    };
    if (rt === "ó" && rb.toLowerCase() in schwa) {
        if (rb in upper) {
            return schwa[rb.toLowerCase()].toUpperCase();
        }
        return schwa[rb];
    }

    const diacritic: any = {
        â: "a",
        ā: "a",
        ä: "a",
        ë: "e",
        ī: "i",
        ï: "i",
        ō: "o",
        ö: "o",
        û: "u",
        ü: "u",
    };
    if (rt in diacritic && diacritic[rt] === rb.toLowerCase()) {
        if (rb in upper) {
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
