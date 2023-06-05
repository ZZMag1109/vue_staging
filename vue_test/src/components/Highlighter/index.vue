<template>
  <div class="high">
       11111111111111111
      <div id="higtLine" v-html="formatWord(str)"></div>
      <div class="pop">
        <div class="pop-item" v-for="item in highlightContent" :key="item.hs.id">
          {{ item.hs.text }}
          <span @click="removeHighlight(item)" class="pop-item-close">X</span>
        </div>
      </div>
      <div>
        <!-- <el-popover
          v-if="tipClick"
          :style="highlighterTip"
          placement="top-start"
          width="200"
          trigger="hover"
          > -->
          <el-button slot="reference" size="small" v-if="tipClick" :style="highlighterTip" @click="handelAddTip">
            <el-tooltip  effect="dark" content="标注" placement="top">
             <i class="el-icon-edit"></i>
            </el-tooltip>
          </el-button> 
        <!-- </el-popover> -->
      </div>
  </div>
</template>

<script>
import Highlighter from 'web-highlighter';
import LocalStore from './local.store';
const store = new LocalStore();
 

export default {
   name: 'highlighter',
   data() {
       return {
          transferHighlightContent: [],
          highlighter: null,
          highlightContent: [],
          tipClick: false,
          currentEle: null,
          isDbclick: false,
          tipOffset: {
            top: '0px',
            left: '0px'
          },
          str: '我纠结地拧了拧眉。\n谁晓得，这年头个个开始玩高科技。\n…\n不到三天时间，瑞哥就把整栋楼挨个查了一个遍。\n最后将目光锁定在了我的身上。\n我的嫌疑是最大的。\n瑞哥一手揪住我的头发，厉声逼问：「贱人，是不是条子，嗯？」\n头皮紧攥得疼，我呼了呼口气，抬手挡着瑞哥。\n「我听不懂你什么意思。」\n瑞哥一把甩开我，并不跟我有过多纠缠，直接冷声吩咐。\n「下午我还有货要看，没工夫和她废话，直接埋了。」\n「妈的，要是她有问题，那个傅淮也跑不了。」\n「要么活埋，要么老实交代！」\n说着，一群人上前抓住了我。\n赵哥抿了唇，对瑞哥说。\n「瑞哥她之前就耍过傅总，估计这事是她自己的主意。」\n「或者她是被逼的，之前不是那个赵敏接触过她吗？」\n提起赵敏，瑞哥抽着烟心里就一阵烦躁。\n「赵敏那贱人都死了，怎么对峙？算了直接埋了。」\n他话一落，我就被这些人强拉硬拽地拖着走。\n我没挣扎，任着和他们一起走。\n心里飞速地想着法子。\n就在要上车的时候，一辆黑车忽然从中间冲了过来，横在了我们面前。\n14\n车门一开。\n傅淮那幽暗的冷眸就显露了出来。\n天上下着毛毛细雨，傅淮身边的手下撑着黑伞接他走出来。\n我被押跪在了地上，手背被瑞哥踩了上去。\n瑞哥吐了一口痰在地上，烟头捏灭，危险地眯了眯自己的肿泡眼。\n「傅总，你该不会是想救她吧？」\n「我张瑞不是小气的人，你想收回去就收，但是这女的，手脚不干净，现在我看着你都感觉有点不信任了。」\n傅淮一个眼神都没有落在我的身上。\n懒懒的嗤了一声。\n「送她来这里，我就没想这女人能好好地活着，瑞总想对她做什么都可以。」\n我跪在地上，雨水落在了我的指尖，冷得我抖了抖。\n阿西吧。\n是个狠人。\n此时此刻一些陌生的记忆不知不觉地忽然涌上了我的脑海。\n「傅淮，我脚痛诶，你不是喜欢我吗？抱我回去呗。」\n「傅淮，要不然你试一试，是你狠心还是我狠心？」\n陌生的白衣少女总缠在傅淮的身边，像只喜鹊一样不停地叽叽喳喳。\n我头疼地嘶了一声，这怎么回事。\n「系统，这是原主记忆？」\n系统：「emmm……你说是就是吧。」\n我正想追问，瑞哥这边却出声哼了一声。\n「这女的，嘴巴巴适的很，拉去埋了，傅总要跟我们一起去吗？」\n「埋了？」傅淮淡淡反问了一句。\n然后嘴角勾起玩味的弧度，缓缓而道。\n「恐怕来不及，之前那批货提前到的，是鲜货，那批货要出口我必须看一眼，才能和你们合作，瑞总就不去？」\n瑞哥瞬间警惕了起来。\n「你故意的？」\n傅淮微微笑了笑，玩世不恭至极，一手把我粗鲁地扯了起来，状似漫不经心却又死死掐紧我的后脖子。\n我瞬间就被他掐住了命运的后脖颈，一动不能动。\n傅淮的一股狠戾不知不觉蔓延开来。\n「想多了，为了一个女人至于？」\n「那批货提前来，可不是我做的主，我也是刚刚才知道的。」\n「要是担心，大不了带她一起，等完事了，随便。」\n说完，傅淮冷不丁地忽然看了我一眼。\n那眼神有太多东西。\n也不知哪来熟悉感，让我下意识就知道自己该怎么做。\n我立马哭了出来，挣扎地推开他，小手狠狠锤他心口子。\n「呜呜呜你这死没良心的！我好歹从前跟了你啊，你怎么可以这般见死不救！」\n「什么发信号，我根本不知道，你们拿出证据来啊，拿出来啊。」\n「傅淮，我要是死了，做鬼也不会放过你。」\n15\n傅淮浅浅一笑，单手攥住我乱打的手，警告似的捏得很紧。\n「那你可以放心，你做人尚且玩不过我，成了鬼还能成什么气候？」\n我和傅淮这一来一往的。\n瑞哥忽然脸色就轻松了些许。\n同意了我同行。\n不过还是让他的心腹赵哥和我们同一辆车一起走。\n方便时时刻刻盯着我的动静。\n我坐在后车座上，车子刚一开，身子就被身边的傅淮拉近。\n赵哥坐在驾驶座上，透过镜子扫了我们一眼，指尖敲打了几下方向盘。\n哒哒哒。\n我警惕地竖起寒毛，看向傅淮。\n傅淮扫了一眼，并不在意，反而是亲手把我凌乱的发丝绕到了耳后，啧了一声，他幽幽地道：「江汝，害怕吗？」\n「倘若能回到过去，你还会背叛我吗？」\n我沉默了三秒。\n嘚，消失了几天，这狗男人还是不信她。\n眨巴了下眼，我嘴里的话就这样顺了出来。\n「可能你不相信，但我们之间冥冥之中早有注定，是天选，是归属，是前世有着难解的羁绊，从我看到你的第一眼开始就知道，你是我这辈子也逃脱不了劫。」\n「傅淮，不管你信不信，就算今天我死了，我仍然要说，我爱你，永远不会背叛你。」\n系统：「？？」\n傅淮看了我很久，然后嘴角勾了勾，抬手摸了摸脸，眸底闪过一丝复杂的深光。\n「江汝，你还是和以前一样喜欢花言巧语。」\n「死到临头了，也这样。」\n闻言，我心都跟着沉了沉。\n没想到原还有人和我一样的臭不要脸。\n收了收情绪，我晃了晃被绑了严严实实的手。\n我吸了吸鼻子，睁着卡瓷兰大眼真诚地对他说，「没有，我说的都是真心话，万一真的我被瑞哥活埋了，你以后不要太想我。」\n傅淮暗暗咬牙的深呼吸一口气，胸膛跟着震了震，俨然是气笑的。\n「我错了，我应该直接让你闭嘴的。」\n不知哪来的胶纸，傅淮一贴把我嘴封上了。\n「唔？唔唔唔唔唔！」\n赵哥开着车子，眼神总忍不住瞟过来，最后摇了摇头。\n16\n开了将近四个小时的车，就来到了一个铁皮废弃工厂里，我看了一眼地界线石碑，是缅北的边界处。\n明明是那么小的缅北，却是把世界的罪恶装得盆满钵满。\n我是被傅淮一脚给蹬出去的。\n「唔唔唔？唔！」\n傅淮嘴角勾着一丝冷嗤，垂眸折了折袖子，优雅又得体地下了车，还被赵哥撑着黑伞护着，居高临下地看着我。\n我气得心肝都疼了。\n傅淮拽住绑我的绳子猛然一扯。\n「走了。」\n拽人跟拽狗一样，我忍不住嫌弃地翻了翻白眼。\n系统：「宿主，你忘记了大明湖畔里的任务了吗？你这样和他相爱相杀是不会有好结果的。」\n我看着眼前冷拽的背影。\n「没事，双死即he，大不了一起死。」\n系统：？\n过分了藕。\n瑞哥先率先带着人走了进去，我才刚踏进去，一股腥味就冲进了我的鼻子。\n我难受地抬眸看过去。\n只见领头的人，带来了一箱箱的冰装货，一一地让人翻开了遮挡的白布。\n冰柜里一堆的马赛克。\n我吓得尖叫，胶带不牢靠地跟着掉下来了。\n领头的人则是笑了笑。\n「怎么有个小姑娘？」\n瑞哥兴奋地看着冰柜里的鲜货，趴在冰柜边缘吸了吸冰雾的白气。\n「待会就处理了她，死人是不会说出去的。」\n话才刚落，瑞哥察觉到什么，目光又定在了领头上的人，警惕地拧了拧眉。\n「我怎么以前没见过你，新来的？」\n领头人还未说话，一边的傅淮却捂住了口鼻，指着柜子里的薄皮。\n「你们这也卖？」\n领头人笑了笑，「新鲜的，国外很多人要呢，尤其是要年轻的漂亮姑娘，越年轻皮肤越紧致，卖的价钱就越好。」\n「怎么样，可以过海关吧。」\n「这些转手出去，几千万都拿到手了。」\n17\n瑞哥这下子不疑有他，立马期盼地看着傅淮，「傅总，怎么样，能过吧？」\n傅淮勾起冰柜上的冰碴，闻了闻味。\n「可以，不过要分批。」\n瑞哥脸上一喜。\n紧接着，傅淮一把拉过我，把我推向了领头人的身边。\n「帮我看看，她这样的，能割几斤皮出来？」\n'
       }
   },
   computed: {
     highlighterTip() {
       return {
         position: 'absolute',
         ...this.tipOffset
       }
     }
   },
   methods: {
     // 获取数据存储，将高亮区域还原展示在网页上
    initHistoryPage() {
      this.highlightContent = store.getAll()
      console.log(111, this.highlightContent);
        store.getAll().forEach(
            ({hs}) => this.highlighter.fromStore(hs.startMeta, hs.endMeta, hs.text, hs.id)
        );
    },
    //添加监听事件
     initHighlight() {
       this.highlighter = new Highlighter({
        $root: document.getElementById('higtLine'),
        exceptSelectors: ['my-mark-tip', 'pre', 'code']
        });
       // 3. 监听高亮笔记创建事件，并将信息存至后端
        this.highlighter
        .on(Highlighter.event.CREATE, ({sources}) => {
          this.isDbclick = true
          // 鼠标双击，但没有选中文本的情况
          const isLimitDbClick = this.dbClick(sources)
          if (isLimitDbClick) return
          // 限制框选字符不能超过200个字符
          const isLimitNum = this.checkTipNum(sources)
          if (isLimitNum) return
          // 限制框选条数不能超过10条
          const isLimit = this.checkTagNum(sources)
          if (isLimit) return
          // 如果上一条没有批注，则取消上一条的高亮
          this.checkTip()
          sources.forEach(s => {
            // 如果是已经批注过，划线部分不展示批注按钮
            const isExsit = this.highlightContent.some(item => item.hs.id === s.id) 
            if (!isExsit) {
               this.getPosition(this.highlighter.getDoms(s.id)[0]);
               this.currentEle = this.highlighter.getDoms(s.id)[0]
              // this.createTag(position.top, position.left, s.id);
            }
          });
          sources = sources.map(hs => ({hs}));
          store.save(sources);
          this.transferHighlightContent.push(sources[0])
        })
          .on(Highlighter.event.REMOVE, ({ids}) => {
          console.log('remove -', ids);
          ids.forEach(id => store.remove(id));
        })
        .on(Highlighter.event.CLICK, ({id}) => {
          console.log('click -', id)
        })
        this.highlighter.run();
        
     },
    //  获取高亮位置
    getPosition($node) {
      let offset = {
          top: 0,
          left: 0
      };
      while ($node) {
          offset.top += $node.offsetTop;
          offset.left += $node.offsetLeft;
          $node = $node.offsetParent;
      }
      this.tipOffset = {
        left: `${offset.left - 10}px`,
        top: `${offset.top - 35}px`
      }
      this.tipClick = true
    },
    // 创建批注标签
    // createTag (top, left, id) {
    //   const $span = document.createElement('span');
    //   $span.style.left = `${left - 20}px`;
    //   $span.style.top = `${top - 25}px`;
    //   $span.dataset.id = id;
    //   $span.textContent = '标注';
    //   $span.classList.add('my-mark-tip');
    //   document.body.appendChild($span);
    // },
    
    // 移除高亮
    removeHighlight(item) {
      const id = item.hs.id
      this.highlighter.remove(id)
      this.transferHighlightContent = this.transferHighlightContent.filter(one => {
        return one.hs.id !== id
      })
      this.highlightContent = this.highlightContent.filter(one => {
        return one.hs.id !== id
      })
      // 移除标注dom
      // const elements = document.getElementsByClassName('my-mark-tip');
      // const eleArr = Array.from(elements)
      // const $ele = eleArr.find(item => {
      //   return item.dataset.id === id
      // })
      // $ele.parentElement.removeChild($ele)
    },

    // 监听鼠标事件
    addEventListener() {
      // const _that = this
      document.addEventListener('click', this.keyEvent);
    },
    // 鼠标事件
    keyEvent() {
      if (this.tipClick) {
        debugger
        if (!this.isDbclick) {
          this.checkTip()
        }
      }
      debugger
      this.isDbclick = false
    },
    // 添加标注
    handelAddTip() {
      const item = this.transferHighlightContent[this.transferHighlightContent.length - 1]
      this.highlightContent.push(item)
      this.tipClick = false
    },

    // 如果划线没有做批注，再去划下一个高亮，移除上一个没有批注的高亮
    checkTip () {
      // const selectObj = window.getSelection()
      // const selectText = selectObj.toString()
      // console.log(111, selectObj, selectText);
      debugger
      if (this.tipClick) {
        const item = this.transferHighlightContent[this.transferHighlightContent.length - 1]
        this.highlighter.remove(item.hs.id)
        this.transferHighlightContent.pop()
        this.tipClick = false
      }
    },

    // 批注字数不能超过200字
    checkTipNum (sources) {
      let isLimit = false
      sources.forEach(item => {
        let num = 0;
        const startTextOffset = item.startMeta?.textOffset;
        const endTextOffset = item.endMeta?.textOffset;
        if (startTextOffset < endTextOffset) {
          num = endTextOffset - startTextOffset
        } else {
          num = startTextOffset - endTextOffset
        }
        if (num > 200) {
          this.$message.error('抱歉！最多只能画200个字符！');
          this.highlighter.remove(item.id)
          isLimit = true
        } 
      })
      return isLimit
    },

    // 如果批注条数超过10条，禁止再批注
    checkTagNum (sources) {
      if (this.highlightContent && this.highlightContent.length > 9) {
        sources.forEach(item => {
          this.highlighter.remove(item.id)
        })
        this.$message.error('抱歉！最多只能批注10条信息！')
        return true
      } else {
        return false
      }
    },

    // 如果鼠标双击没有选中文字，则取消这次选中
    dbClick (sources) {
      let isLimit = false
      sources.forEach(item => {
        if (item.text === '') {
          isLimit = true;
          this.highlighter.remove(item.id)
        }
      })
      return isLimit
    },

    // 反转义
      escape2Html (str) {
        const arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' }
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
          return arrEntities[t]
        })
      },

      formatWord(val) {
        return val.replace(/\n/g, '<br>')
      },

   },

   mounted() {
     this.escape2Html(this.str)
     this.initHighlight()
     this.initHistoryPage()
     this.addEventListener()
   },

   beforeDestroy() {
     document.removeEventListener("click", this.keyEvent);
   },

}
</script>

<style lang="scss">
.high {

  .pop {
    height: 500px;
    width: 300px;
    padding: 10px;
    position: fixed;
    right: 10px;
    top: 0;
    overflow: auto;

    &-item {
      position: relative;
      padding: 5px;
      min-height: 100px;
      width: 100%;
      border: 1px solid #dfe2e5;
      margin-bottom: 5px;
      border-radius: 10px;

      &-close {
        position: absolute;
        cursor: pointer;
        color: white;
        background-color: red;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        line-height: 20px;
        text-align: center;
        right: -5px;
        top: -5px;
      }
    }
  }
}

.my-mark-tip {
    box-sizing: border-box;
    position: absolute;
    border: 1px solid #fff;
    border-radius: 3px;
    height: 20px;
    width: 40px;
    color: #fff;
    background: #444;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
    line-height: 18px;
    overflow: visible;
}

.my-mark-tip::after {
    content: '';
    position: absolute;
    left: 16px;
    bottom: -4px;
    border-color: #444 transparent transparent;
    border-width: 4px 4px 0;
    border-style: solid;
    height: 0;
    width: 0;
}
</style>