<template>
  <div class="box">
    <div class="box1" v-html="test"></div>
    <div class="box2" v-html="test2"></div>
  </div>
</template>

<script>
const jsDiff = require('diff');

export default {
  name: 'diffJson',
  data() {
    return {
      test: '',
      test2: '',
      json2: "{ label: '11', value: '22', arr: [1, 2, 3], obj: { label: '11' } }",
      json1: "{ label: '112', value: '22', arr: [1, 4, 5], list: [1, 1] }",
      json3: {"busId":2107,"contentType":9,"auditType":0,"layoutId":2,"name":"信息流直播审核模板","value":"[{\"name\":\"slot-1\",\"componentList\":[{\"value\":{\"span\":\"24\",\"bgColor\":\"rgba(255, 255, 255, 0)\",\"showList\":[\"streamEndTime\",\"history\",\"userGrade\",\"userId\",\"userName\",\"ucid\",\"md5\",\"violation\",\"asr\"],\"commonInfo\":[\"sourceName\",\"ownerName\",\"createTime\",\"originalSourceName\",\"moduleName\",\"skillGroupName\",\"showCategory\",\"desc\",\"publishTime\"],\"auditHistoryNums\":\"10000\",\"commonInfoMap\":{\"sourceName\":\"种子源\",\"ownerName\":\"作者昵称\",\"createTime\":\"入库时间\",\"publishTime\":\"发布时间\",\"originalSourceName\":\"稿源\",\"moduleName\":\"送审类型\",\"skillGroupName\":\"技能组\",\"showCategory\":\"初始分类\",\"desc\":\"简介\",\"smRecoCategory\":\"算法分类\"}},\"componentName\":\"xtInfo\",\"name\":\"信息显示\"},{\"value\":{\"fontSize\":\"14px\",\"fontWeight\":\"bold\",\"fontColor\":\"#000\",\"span\":24,\"extraComponent\":[\"id\",\"title\",\"auditChannelName\",\"priorityComment\",\"history\"],\"dialogComponent\":[\"machine\",\"video\"],\"extraInfo\":[],\"linkJump\":\"\",\"rate\":1,\"autoplay\":false,\"videoComponent\":[\"title\"],\"imgWrapWidth\":\"80\",\"imgWrapHeight\":\"120\",\"imgHoverMaxWidth\":\"800\",\"imgHoverMaxHeight\":\"1000\",\"wrapHeight\":0,\"delay\":500,\"isSetImgCount\":false,\"imgCount\":[{}],\"bgColor\":\"#000\",\"showList\":[],\"commonInfo\":[\"desc\"],\"commonInfoMap\":{\"sourceName\":\"种子源\",\"ownerName\":\"作者昵称\",\"createTime\":\"入库时间\",\"originalSourceName\":\"稿源\",\"moduleName\":\"送审类型\",\"skillGroupName\":\"技能组\",\"showCategory\":\"初始分类\",\"desc\":\"简介\"},\"titleRight\":0},\"componentName\":\"xtHeader\",\"name\":\"标题\"},{\"value\":{\"span\":\"24\",\"imgHoverMaxWidth\":400,\"imgHoverMaxHeight\":500,\"delay\":500,\"bgColor\":\"#000\",\"showList\":[\"history\",\"userGrade\",\"violation\",\"asr\",\"streamEndTime\",\"md5\",\"userName\",\"userId\",\"ucid\"],\"commonInfo\":[\"sourceName\",\"ownerName\",\"createTime\",\"originalSourceName\",\"moduleName\",\"skillGroupName\",\"showCategory\",\"desc\"],\"auditHistoryNums\":\"10000\",\"commonInfoMap\":{\"sourceName\":\"种子源\",\"ownerName\":\"作者昵称\",\"createTime\":\"入库时间\",\"publishTime\":\"发布时间\",\"originalSourceName\":\"稿源\",\"moduleName\":\"送审类型\",\"skillGroupName\":\"技能组\",\"showCategory\":\"初始分类\",\"desc\":\"简介\",\"smRecoCategory\":\"算法分类\"}},\"componentName\":\"xtLiveFrame\",\"name\":\"直播截帧\"},{\"value\":{\"span\":\"24\",\"loopTime\":30,\"minAuditTime\":10,\"countOfCol\":3,\"wScale\":5,\"HScale\":3,\"openPollingAndNext\":false,\"openRecycleBtn\":true,\"componentName\":\"xtVideo\",\"version\":\"0.0.6\",\"showUpgrade\":false},\"componentName\":\"xtLive\",\"name\":\"直播视频\"},{\"value\":{\"span\":\"24\",\"title\":\"\",\"btnStyle\":\"part\",\"subProblemTypeVisible\":false,\"btnWidth\":92,\"marginBottom\":8,\"comHight\":\"auto\",\"tagHight\":\"100\",\"marginRight\":8,\"submitType\":1,\"qualityConfig\":[],\"isLabelMultiple\":false,\"nextData\":false},\"componentName\":\"xtTag\",\"name\":\"问题标签\"},{\"value\":{\"span\":\"24\",\"imgHoverMaxWidth\":\"400\",\"imgHoverMaxHeight\":\"500\",\"delay\":500,\"isShowImg\":true,\"title\":\"\",\"infoList\":[\"text\",\"title\",\"desc\",\"sourceName\",\"image\",\"poster\",\"ASR_TEXT\",\"USERID\",\"userName\",\"same-title-duration-forbid\",\"same-md5-forbid\",\"originalUrl\",\"customData\",\"CATEGORY\"]},\"componentName\":\"xtMachine\",\"name\":\"机审信息\"}]},{\"name\":\"slot-2\",\"componentList\":[{\"value\":{\"span\":\"24\",\"infoList\":[\"xtTag\",\"historyRecord\",\"bePortedRecord\",\"auditHistory\",\"xtMachineInfo\"]},\"componentName\":\"xtLiveHistory\",\"name\":\"直播审核信息\"},{\"value\":{\"span\":\"24\",\"bgColor\":\"#000\",\"showList\":[],\"commonInfo\":[\"sourceName\",\"ownerName\",\"createTime\",\"originalSourceName\",\"moduleName\",\"skillGroupName\",\"showCategory\",\"desc\"],\"auditHistoryNums\":\"10000\",\"commonInfoMap\":{\"sourceName\":\"种子源\",\"ownerName\":\"作者昵称\",\"createTime\":\"入库时间\",\"publishTime\":\"发布时间\",\"originalSourceName\":\"稿源\",\"moduleName\":\"送审类型\",\"skillGroupName\":\"技能组\",\"showCategory\":\"初始分类\",\"desc\":\"简介\",\"smRecoCategory\":\"算法分类\"}},\"componentName\":\"xtInfo\",\"name\":\"信息显示\"}]}]","moduleId":"","skillGroupId":"2145,1747,2703,2713,2964,2965","moduleName":""},
      json4: {"busId":2107,"contentType":9,"auditType":0,"layoutId":"2","name":"信息流直播审核模板","value":"[{\"name\":\"slot-1\",\"componentList\":[{\"value\":{\"span\":\"24\",\"bgColor\":\"rgba(255, 255, 255, 0)\",\"showList\":[\"streamEndTime\",\"history\",\"userGrade\",\"userId\",\"userName\",\"ucid\",\"md5\",\"violation\",\"asr\"],\"commonInfo\":[\"sourceName\",\"ownerName\",\"createTime\",\"originalSourceName\",\"moduleName\",\"skillGroupName\",\"showCategory\",\"desc\",\"publishTime\"],\"auditHistoryNums\":\"10000\",\"commonInfoMap\":{\"sourceName\":\"种子源\",\"ownerName\":\"作者昵称\",\"createTime\":\"入库时间\",\"publishTime\":\"发布时间\",\"originalSourceName\":\"稿源\",\"moduleName\":\"送审类型\",\"skillGroupName\":\"技能组\",\"showCategory\":\"初始分类\",\"desc\":\"简介\",\"smRecoCategory\":\"算法分类\"}},\"componentName\":\"xtInfo\",\"name\":\"信息显示\"},{\"value\":{\"fontSize\":\"14px\",\"fontWeight\":\"bold\",\"fontColor\":\"#000\",\"span\":24,\"extraComponent\":[\"id\",\"title\",\"auditChannelName\",\"priorityComment\",\"history\"],\"dialogComponent\":[\"machine\",\"video\"],\"extraInfo\":[],\"linkJump\":\"\",\"rate\":1,\"autoplay\":false,\"videoComponent\":[\"title\"],\"imgWrapWidth\":\"80\",\"imgWrapHeight\":\"120\",\"imgHoverMaxWidth\":\"800\",\"imgHoverMaxHeight\":\"1000\",\"wrapHeight\":0,\"delay\":500,\"isSetImgCount\":false,\"imgCount\":[{}],\"bgColor\":\"#000\",\"showList\":[],\"commonInfo\":[\"desc\"],\"commonInfoMap\":{\"sourceName\":\"种子源\",\"ownerName\":\"作者昵称\",\"createTime\":\"入库时间\",\"originalSourceName\":\"稿源\",\"moduleName\":\"送审类型\",\"skillGroupName\":\"技能组\",\"showCategory\":\"初始分类\",\"desc\":\"简介\"},\"titleRight\":0},\"componentName\":\"xtHeader\",\"name\":\"标题\"},{\"value\":{\"span\":\"24\",\"imgHoverMaxWidth\":400,\"imgHoverMaxHeight\":500,\"delay\":500,\"bgColor\":\"#000\",\"showList\":[\"history\",\"userGrade\",\"violation\",\"asr\",\"streamEndTime\",\"md5\",\"userName\",\"userId\",\"ucid\"],\"commonInfo\":[\"sourceName\",\"ownerName\",\"createTime\",\"originalSourceName\",\"moduleName\",\"skillGroupName\",\"showCategory\",\"desc\"],\"auditHistoryNums\":\"10000\",\"commonInfoMap\":{\"sourceName\":\"种子源\",\"ownerName\":\"作者昵称\",\"createTime\":\"入库时间\",\"publishTime\":\"发布时间\",\"originalSourceName\":\"稿源\",\"moduleName\":\"送审类型\",\"skillGroupName\":\"技能组\",\"showCategory\":\"初始分类\",\"desc\":\"简介\",\"smRecoCategory\":\"算法分类\"}},\"componentName\":\"xtLiveFrame\",\"name\":\"直播截帧\"},{\"value\":{\"span\":\"24\",\"loopTime\":30,\"minAuditTime\":10,\"countOfCol\":3,\"wScale\":5,\"HScale\":3,\"openPollingAndNext\":false,\"openRecycleBtn\":true,\"componentName\":\"xtVideo\",\"version\":\"0.0.6\",\"showUpgrade\":false},\"componentName\":\"xtLive\",\"name\":\"直播视频\"},{\"value\":{\"span\":\"24\",\"title\":\"\",\"btnStyle\":\"part\",\"subProblemTypeVisible\":false,\"btnWidth\":92,\"marginBottom\":8,\"comHight\":\"auto\",\"tagHight\":\"100\",\"marginRight\":8,\"submitType\":1,\"qualityConfig\":[],\"isLabelMultiple\":false,\"nextData\":false},\"componentName\":\"xtTag\",\"name\":\"问题标签\"},{\"value\":{\"span\":\"24\",\"imgHoverMaxWidth\":\"400\",\"imgHoverMaxHeight\":\"500\",\"delay\":500,\"isShowImg\":true,\"title\":\"\",\"infoList\":[\"text\",\"title\",\"desc\",\"sourceName\",\"image\",\"poster\",\"ASR_TEXT\",\"USERID\",\"userName\",\"same-title-duration-forbid\",\"same-md5-forbid\",\"originalUrl\",\"customData\",\"CATEGORY\"]},\"componentName\":\"xtMachine\",\"name\":\"机审信息\"}]},{\"name\":\"slot-2\",\"componentList\":[{\"value\":{\"span\":\"24\",\"infoList\":[\"xtTag\",\"historyRecord\",\"bePortedRecord\",\"auditHistory\",\"xtMachineInfo\"]},\"componentName\":\"xtLiveHistory\",\"name\":\"直播审核信息\"}]}]","moduleId":[],"skillGroupId":[2145,1747,2703,2713,2964,2965],"moduleName":""},
      json5: {busId:11,creator:"cailongyan1",skillGroupIds:",-1,",modifier:"cailongyan1",active:true,className:"XTBizTemplate",templateValue:110,auditType:0,moduleIds:",-1,",modifyTime:1668482875000,createTime:"2018-03-14 21:37:34",templateName:"大鱼图文问题标签-0713","id":25,contentType:2,templateKey:"2"},
      json6: {busId:11,creator:"cailongyan1",skillGroupIds:",-1,",modifier:"dyA",className:"XTBizTemplate",templateValue:48,auditType:0,moduleIds:",-1,",modifyTime:1668482875000,createTime:"2018-03-14 21:37:34",id:25,contentType:2,templateKey:"2"}
    }
  },
  methods: {
    //获取对比后的结果及拼接展示效果
diffJSON (json1, json2) {
    // diff之后的结果
    const diffResult = jsDiff.diffJson(json1, json2);
    console.log(111, diffResult);
    let addedList = [];
    let removedList = [];
    //遍历对比结果，摘出相应的数据
    //首先判断的量级为一行
    diffResult.forEach((diffObj, index) => {
      let content = diffObj.value;
      let replaceContent = this.replaceContentFunc(content);
      //该项的下一项
      let next = diffResult[index + 1];
      let nextReplceContent = next && this.replaceContentFunc(next.value);
      debugger
      if (diffObj.removed) {
        //需要展示在历史结果位置的数据
        let dealedContent = '';
        if (diffObj.removeContent) {
          dealedContent = diffObj.removeContent;
        } else {
          //判断下一个项
          if (next && next.added) {
            //说明两个项之前是对应的关系
            //判断在不同的这行中，具体到字段的不同位置
            let testDiffList = jsDiff.diffWordsWithSpace(replaceContent, nextReplceContent);
            let { addContent, removeContent } = this.diffText(testDiffList);
            next.addContent = addContent;
            dealedContent = removeContent;
          } else {
            dealedContent =
              '<div class="error-line-remove" style="color:red">' +
              replaceContent.replace(/\s/gm, '&ensp;') +
              '</div>';
          }
          removedList.push(dealedContent);
        }
      } else if (diffObj.added) {
        //需要展示在当前结果位置的数据
        let dealedContent = '';
        if (diffObj.addContent) {
          dealedContent = diffObj.addContent;
        } else {
          //判断下一个项
          if (next && next.removed) {
            //说明两个项之前是对应的关系
            //判断在不同的这行中，具体到字段的不同位置
            let testDiffList = jsDiff.diffWordsWithSpace(replaceContent, nextReplceContent);
            let { addContent, removeContent } = this.diffText(testDiffList);
            next.removeContent = removeContent;
            dealedContent = addContent;
          } else {
            dealedContent =
              '<div class="error-line-add" style="color:red">' +
              replaceContent.replace(/\s/gm, '&ensp;') +
              '</div>';
          }
        }
        addedList.push(dealedContent);
      } 
      else {
        //没有改动的部分
        replaceContent = replaceContent.replace(/\s/gm, '&ensp;');
        addedList.push('<div>' + replaceContent + '</div>');
        removedList.push('<div>' + replaceContent + '</div>');
      }
    });
    let addedHtml = addedList.join('');
    let removedHtml = removedList.join('');
    this.test = addedList.join('');
    this.test2 = removedList.join('');
    console.log(111,addedHtml);
    console.log(222,removedHtml);
    return {
      addedHtml,
      removedHtml,
    };
},
  //对比行内容差异并且拼接结果
 diffText (result) {
    // json2 当前数据
    let addList = [];
    // json1 原始数据
    let removeList = [];
    result.forEach(item => {
      let value = item.value.replace(/\s/gm, '&ensp;');
      if (item.added) {
        addList.push('<span style="background-color:yellow">' + value + '</span>');
      } else if (item.removed) {
        removeList.push('<span  style="color:red">' + value + '</span>');
      } else {
        removeList.push('<span>' + value + '</span>');
        addList.push('<span>' + value + '</span>');
      }
    });
    return {
      addContent: `<div class="error-line-add">${addList.join('')}</div>`,
      removeContent: `<div class="error-line-remove">${removeList.join('')}</div>`,
    };
},
//处理换行和空格
replaceContentFunc(content) {
    let text = content;
    if (content.indexOf('\n') >= 0) {
      // 换行替换为<br/>
      // 空格替换为&ensp;
      const reg1 = new RegExp('\n', 'g');
      text = text.replace(reg1, '<br/>');
    }
    return text;
},
  },
  mounted() {
      // const test = JSON.parse(this.json1)
      // console.log(111, test);
      this.diffJSON(this.json6, this.json5)
  }
}
</script>

<style lang="scss">
.box {
  display: flex;
  height: auto;
  justify-content: space-between;

  .box1 {
    width: 45%;
  }
  .error-line-remove {
      background-color: rgb(248, 216, 216);
      position: relative;

      &::before {
        content: '-';
        position: absolute;
        left: 5px;
        color: black;
        line-height: 19.5px;
      }
    }

.box2 {
  width: 45%;
}

.error-line-add {
  background-color: rgb(226, 248, 216);
  position: relative;

  &::before {
    content: '+';
    position: absolute;
    left: 5px;
    color: black;
    line-height: 19.5px;
  }
}

}
</style>