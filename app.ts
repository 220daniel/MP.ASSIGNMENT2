import { IonSearchbar } from '@ionic/core/components/ion-searchbar'
import { IonSelect } from '@ionic/core/components/ion-select'
import { IonList } from '@ionic/core/components/ion-list'


let baseUrl = 'https://dae-mobile-assignment.hkit.cc'

// 瑜伽動作資料（至少 20 筆）
// let yogaPoses = [
//     {
//         title: "下犬式",
//         difficulty: "初級",
//         benefits: "增強手臂和腿部力量，拉伸背部和腿筋",
//         precautions: "避免頭部過低，保持脊椎延展",
//         imageUrl: "photo/下犬式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/YwFOL6vFfhE",
//         category: "基礎動作",
//         tags: ["拉伸", "力量", "全身"],
//     },
//     {
//         title: "戰士一式",
//         difficulty: "初級",
//         benefits: "增強腿部力量，提升平衡能力",
//         precautions: "膝蓋不要超過腳踝，前腿保持90度",
//         imageUrl: "photo/戰士一式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/JpN_rKLaCkA",
//         category: "站姿動作",
//         tags: ["平衡", "力量", "腿部"],
//     },
//     {
//         title: "樹式",
//         difficulty: "初級",
//         benefits: "提升平衡能力，強化腿部肌肉",
//         precautions: "避免將腳放在膝蓋關節上",
//         imageUrl: "photo/樹式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/5fvZc4UIkPA",
//         category: "平衡動作",
//         tags: ["平衡", "專注", "腿部"],
//     },
//     {
//         title: "橋式",
//         difficulty: "初級",
//         benefits: "強化臀部和核心，拉伸胸部",
//         precautions: "避免頸部用力，保持肩膀放鬆",
//         imageUrl: "photo/橋式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/2nyP1a_Vp9Q",
//         category: "仰臥動作",
//         tags: ["核心", "臀部", "拉伸"],
//     },
//     {
//         title: "貓牛式",
//         difficulty: "初級",
//         benefits: "增加脊椎靈活性，緩解背部緊張",
//         precautions: "動作輕柔，避免過度用力",
//         imageUrl: "photo/貓牛式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/nGFe2xwdTB8",
//         category: "基礎動作",
//         tags: ["脊椎", "拉伸", "放鬆"],
//     },
//     {
//         title: "戰士二式",
//         difficulty: "中級",
//         benefits: "增強腿部力量，開髖",
//         precautions: "保持骨盆中立，肩膀放鬆",
//         imageUrl: "photo/戰士二式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/GaIZi52YC98",
//         category: "站姿動作",
//         tags: ["力量", "開髖", "平衡"],
//     },
//     {
//         title: "三角式",
//         difficulty: "中級",
//         benefits: "拉伸側腰和腿筋，增強核心",
//         precautions: "避免肩膀聳起，保持頸部放鬆",
//         imageUrl: "photo/三角式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/lBeINyDSEDM",
//         category: "站姿動作",
//         tags: ["拉伸", "核心", "平衡"],
//     },
//     {
//         title: "船式",
//         difficulty: "中級",
//         benefits: "強化核心肌群，提升平衡",
//         precautions: "避免背部駝曲，保持脊椎延展",
//         imageUrl: "photo/船式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/7_wVn9qUUjQ",
//         category: "坐姿動作",
//         tags: ["核心", "平衡", "力量"],
//     },
//     {
//         title: "眼鏡蛇式",
//         difficulty: "初級",
//         benefits: "拉伸胸部，強化背部肌肉",
//         precautions: "避免手臂過度用力，保持臀部放鬆",
//         imageUrl: "photo/眼鏡蛇式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/uom1GB5uCPE",
//         category: "俯臥動作",
//         tags: ["拉伸", "背部", "胸部"],
//     },
//     {
//         title: "鴿子式",
//         difficulty: "中級",
//         benefits: "開髖，拉伸臀部和髖屈肌",
//         precautions: "避免膝蓋扭轉，保持骨盆中立",
//         imageUrl: "photo/鴿子式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/0OPlqNF2OWY",
//         category: "坐姿動作",
//         tags: ["開髖", "拉伸", "放鬆"],
//     },
//     {
//         title: "側板式",
//         difficulty: "中級",
//         benefits: "強化核心和手臂，提升穩定性",
//         precautions: "避免髖部下沉，保持身體一條直線",
//         imageUrl: "photo/側板式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/tAADMO95skE",
//         category: "平衡動作",
//         tags: ["核心", "力量", "穩定"],
//     },
//     {
//         title: "輪式",
//         difficulty: "高級",
//         benefits: "拉伸胸部和肩膀，強化背部",
//         precautions: "避免頸部過度用力，需充分熱身",
//         imageUrl: "photo/輪式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/5KDJdwQIaC0",
//         category: "後彎動作",
//         tags: ["拉伸", "背部", "進階"],
//     },
//     {
//         title: "頭倒立",
//         difficulty: "高級",
//         benefits: "增強核心和肩膀，提升專注力",
//         precautions: "需在教練指導下練習，避免頸部受傷",
//         imageUrl: "photo/頭倒立_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/meJHzBFjp9s",
//         category: "倒立動作",
//         tags: ["核心", "平衡", "進階"],
//     },
//     {
//         title: "烏鴉式",
//         difficulty: "高級",
//         benefits: "強化手臂和核心，提升平衡",
//         precautions: "避免肩膀過度用力，需充分熱身",
//         imageUrl: "photo/烏鴉式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/2F2c9NMUxLQ",
//         category: "平衡動作",
//         tags: ["手臂", "核心", "進階"],
//     },
//     {
//         title: "弓式",
//         difficulty: "中級",
//         benefits: "拉伸胸部和髖屈肌，強化背部",
//         precautions: "避免過度拉伸，保持呼吸順暢",
//         imageUrl: "photo/弓式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/MYK9ZdGy9iQ",
//         category: "俯臥動作",
//         tags: ["拉伸", "背部", "胸部"],
//     },
//     {
//         title: "坐角式",
//         difficulty: "中級",
//         benefits: "拉伸內側大腿和髖部，促進血液循環",
//         precautions: "避免強迫身體下壓，保持脊椎延展",
//         imageUrl: "photo/坐角式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/6YSMmLGB0MU",
//         category: "坐姿動作",
//         tags: ["拉伸", "開髖", "放鬆"],
//     },
//     {
//         title: "半月式",
//         difficulty: "中級",
//         benefits: "提升平衡能力，強化腿部和核心",
//         precautions: "避免髖部扭轉，保持身體穩定",
//         imageUrl: "photo/半月式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/N5Xv-hfNbmo",
//         category: "平衡動作",
//         tags: ["平衡", "核心", "力量"],
//     },
//     {
//         title: "犁式",
//         difficulty: "高級",
//         benefits: "拉伸背部和肩膀，促進放鬆",
//         precautions: "避免頸部過度用力，需在指導下練習",
//         imageUrl: "photo/犁式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/U6H_v9IEJMo",
//         category: "仰臥動作",
//         tags: ["拉伸", "放鬆", "進階"],
//     },
//     {
//         title: "魚式",
//         difficulty: "中級",
//         benefits: "拉伸胸部和喉部，緩解肩頸緊張",
//         precautions: "避免頭部過度後仰，保持頸部放鬆",
//         imageUrl: "photo/魚式_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/V2SrE21zY5Y",
//         category: "仰臥動作",
//         tags: ["拉伸", "胸部", "放鬆"],
//     },
//     {
//         title: "仰臥扭轉",
//         difficulty: "初級",
//         benefits: "緩解背部緊張，促進脊椎靈活性",
//         precautions: "避免用力過猛，保持呼吸順暢",
//         imageUrl: "photo/仰臥扭轉_v1.jpg",
//         videoUrl: "https://www.youtube.com/embed/QTgGddt1SYI",
//         category: "仰臥動作",
//         tags: ["拉伸", "脊椎", "放鬆"],
//     },
// ];
type YogaPose = {
    id: number;
    tags: string[];
    sanskrit_name: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    duration_minutes: number;
    instructor: string;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
    title: string;
    description: string;
    category: string;
    image_url: string; // URL string
    video_url: string; // URL string
    published_at: string; // ISO 8601 date string
    benefits: string[];
};

type Pagination = {
    page: number;
    limit: number;
    total: number;
};

type YogaData = {
    error?: string
    items: YogaPose[];
    pagination: Pagination;
};


// 狀態管理
let currentSearch = "";
let currentDifficulty = "";

// DOM 元素
const searchbar = querySelector("ion-searchbar") as IonSearchbar;
const categorySelect = querySelector("ion-select") as IonSelect;
const listContainer = querySelector("#yoga-list") as IonList;
const loadingSpinner = querySelector(".loading-spinner");
const refreshButton = querySelector("#refreshButton");

function querySelector(selector: string) {
    let element = document.querySelector(selector);
    if (!element) {
        alert('failed to query by selector: ' + selector)
        throw new Error('failed to query by selector: ' + selector)
    }
    return element
}

// 初始化
document.addEventListener("DOMContentLoaded", () => {
    updateList();
    setupEventListeners();
});

refreshButton.addEventListener('click', ()=>{
    updateList();
})

// 事件監聽
function setupEventListeners() {
    // 搜尋
    searchbar.addEventListener("ionInput", (e) => {
        currentSearch = searchbar.value?.trim().toLowerCase() || "";
        updateList();
    });

    // 分類過濾
    categorySelect.addEventListener("ionChange", (e) => {
        currentDifficulty = categorySelect.value || '';
        updateList();
    });

    // 標籤點擊過濾
    listContainer.addEventListener("click", (e) => {
        let element = e.target
        if (element instanceof HTMLElement && element.tagName === "ION-CHIP") {
            currentDifficulty = element.textContent?.trim() || "";
            categorySelect.value = currentDifficulty;
            updateList();
        }
    });
}

// 更新清單
async function updateList() {
    loadingSpinner.classList.add("active");
    listContainer.innerHTML = "";


    // https://dae-mobile-assignment.hkit.cc/api/yoga-poses
    let url = baseUrl + '/api/yoga-poses'
    console.log('loading yoga list from:', url)
    let res = await fetch(url)
    console.log('load yoga response:', res)
    let json = await res.json() as YogaData
    console.log('load yoga data:', json)

    if (json.error) {
        loadingSpinner.classList.remove("active");
        alert(json.error)
        return
    }

    let yogaPoses = json.items

    // 過濾資料
    const filteredPoses = yogaPoses.filter((pose) => {
        const matchesSearch =
            pose.title.toLowerCase().includes(currentSearch) ||
            pose.benefits.join('，').toLowerCase().includes(currentSearch);
        const matchesDifficulty =
            currentDifficulty === "" || pose.difficulty === currentDifficulty;
        return matchesSearch && matchesDifficulty;
    });

    // 渲染清單
    filteredPoses.forEach((pose) => {
        const item = document.createElement("ion-item");
        item.innerHTML = `
        <ion-card>
          <div class="item-content">
            <div>
              <div class="item-title">${pose.title}</div>
              <div class="item-subtitle">難度: ${pose.difficulty}</div>
              <div class="item-details">效果: ${pose.benefits}</div>
              <div class="item-precautions">注意事項: ${pose.description}</div>
              <div class="tag-container">
                ${pose.tags
                .map(
                    (tag) => `<ion-chip size="small" color="primary">${tag}</ion-chip>`
                )
                .join("")}
              </div>
            </div>
            <div>
              <img
                class="item-image"
                src="${pose.image_url}"
                alt="${pose.title}"
                onerror="this.src='https://via.placeholder.com/800x800?text=圖片無法載入'"
              />
              <iframe
                class="item-video"
                src="${pose.video_url.replace('/watch?v=', '/embed/')}"
                frameborder="0"
                allowfullscreen
                onerror="this.outerHTML='<p>無法載入影片，請確認網路連線或稍後再試</p>'"
              ></iframe>
            </div>
          </div>
        </ion-card>
      `;
        listContainer.appendChild(item);
    });

    // 模擬載入延遲
    setTimeout(() => {
        loadingSpinner.classList.remove("active");
    }, 300);
}