const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('.'));

const PORT = 3000;

let customerRequests = [
    { id: 1, name: "田中 健太 様", request: "高層階の静かな部屋を希望。結婚記念日での利用。", status: "対応中" },
    { id: 2, name: "佐藤 美咲 様", request: "重度の海老アレルギーあり。夕食のメニュー変更済み。", status: "完了" },
    { id: 3, name: "鈴木 一郎 様", request: "足が不自由なため、エレベーターに近い部屋を希望。", status: "未対応" },
    { id: 4, name: "高橋 誠 様", request: "18時に駅まで送迎バスの利用を予約。", status: "対応中" },
    { id: 5, name: "伊藤 杏奈 様", request: "ベビーベッドを1台客室に設置希望。", status: "完了" },
    { id: 6, name: "渡辺 裕二 様", request: "チェックイン前に荷物の預かり希望（11時頃到着）。", status: "未対応" },
    { id: 7, name: "中村 結衣 様", request: "ベジタリアン対応 de 朝食に変更希望。", status: "未対応" },
    { id: 8, name: "小林 直樹 様", request: "加湿器の貸出を希望。", status: "完了" },
    { id: 9, name: "加藤 浩次 様", request: "深夜24時以降のレイトチェックイン予定。", status: "対応中" },
    { id: 10, name: "吉田 茂 様", request: "新聞（日経）の朝刊をドアに届けてほしい。", status: "未対応" },
    { id: 11, name: "山田 花子 様", request: "予備の枕を2つ追加希望。", status: "完了" },
    { id: 12, name: "佐々木 蔵之介 様", request: "タクシーの手配（明日朝9時）。", status: "未対応" },
    { id: 13, name: "松本 潤 様", request: "誕生日用のケーキを20時に部屋へ配送。", status: "対応中" },
    { id: 14, name: "井上 真央 様", request: "パジャマのサイズをLに変更希望。", status: "完了" },
    { id: 15, name: "木村 拓哉 様", request: "VODの視聴方法について説明希望。", status: "未対応" }
];

app.get('/api/requests', (req, res) => {
    res.json(customerRequests);
});

app.put('/api/requests/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newStatus = req.body.status;
    customerRequests = customerRequests.map(item => 
        item.id === id ? { ...item, status: newStatus } : item
    );
    res.json({ message: "Success" });
});

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}/index.html`);
});