// namespace 是将相关代码组织在一起的方式，中文称为 `命名空间`
// namespace 用来建立一个容器，内部的所有变量和函数，都必须在这个容器里面使用
// 目前有了ES模块，官方已不推荐使用 namespace了
namespace AR {
  interface I_ArtWork {
    id: number,
    title: string,
    seen: boolean
  }

  interface I_ItemListProps {
    artworks: I_ArtWork[],
    onToggle: (idx: number, nextState: boolean) => void
  }
}
