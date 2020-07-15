// 这个函数会用在每当我们想要停用一个自定义组件的时候
// 它需要一个参数：
// select :要停用的带有 'select' 类的节点
function deactivateSelect(select) {

    // 如果组件没有运行，不用进行任何操作
    if (!select.classList.contains('active')) return;

    // 我们需要获取自定义组件的选项列表
    var optList = select.querySelector('.optList');

    // 关闭选项列表
    optList.classList.add('hidden');

    // 然后停用组件本身
    select.classList.remove('active');
}

// 每当用户想要激活（或停用）这个组件的时候，会调用这个函数
// 它需要2个参数：
// select : 要激活的带有'select'类的DOM节点
// selectList : 包含所有带'select'类的DOM节点的列表
function activeSelect(select, selectList) {

    // 如果组件已经激活了，不进行任何操作
    if (select.classList.contains('active')) return;

    // 我们需要关闭所有自定义组件的活动状态
    // 因为deactiveselect函数满足forEach回调函数的所有请求，
    // 我们直接使用它，不使用中间匿名函数
    selectList.forEach(deactivateSelect);

    // 然后我们激活特定的组件
    select.classList.add('active');
}

// 每当用户想要打开/关闭选项列表的时候，会调用这个函数
// 它需要一个参数:
// select : 要触发的列表的DOM节点
function toggleOptList(select) {

    // 该列表不包含在组件中
    var optList = select.querySelector('.optList');

    // 我们改变列表的class去显示/隐藏它
    optList.classList.toggle('hidden');
}

// 每当我们要高亮一个选项的时候，会调用该函数
// 它需要两个参数:
// select : 带有'select'类的DOM节点，包含了需要高亮强调的选项
// option : 需要高亮强调的带有'option'类的DOM节点
function highlightOption(select, option) {

    // 为我们的自定义select元素获取所有有效选项的列表
    var optionList = select.querySelectorAll('.option');

    // 我们移除所有选项的高亮强调
    optionList.forEach(function (other) {
        other.classList.remove('highlight');
    });

    // 我们高亮强调正确的选项
    option.classList.add('highlight');
};


// ================================

// 这个函数更新显示的值并将其通过原生组件同步
// 它需要2个参数:
// select : 含有要更新的值的'select'类的DOM节点
// index  : 要被选择的值的索引
function updateValue(select, index) {
    var nativeWidget = select.previousElementSibling;
    var value = select.querySelector('.value');
    var optionList = select.querySelectorAll('.option');

    // 我们确保所有的选项都没有被选中
    optionList.forEach(function (other) {
        other.setAttribute('aria-selected', 'false');
    });

    // 我们确保选定的选项被选中了
    optionList[index].setAttribute('aria-selected', 'true');

    nativeWidget.selectedIndex = index;
    value.innerHTML = optionList[index].innerHTML;
    highlightOption(select, optionList[index]);
};

// 这个函数返回原生组件里当前选定的索引
// 它需要1个参数:
// select : 跟原生组件有关的'select'类DOM节点
function getIndex(select) {
    // 我们需要为了给定的自定义组件访问原生组件
    // 在我们的例子中, 原生组件是自定义组件的一个“同胞”
    var nativeWidget = select.previousElementSibling;

    return nativeWidget.selectedIndex;
};


// =================================

