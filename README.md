#### git
```
git init
git remote add origin https://github.com/shaonq/react-native-teaset-demo.git
```

#### error
##### `maximum call stack size exceeded`
```
 componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                timerCount: +new Date
            })
        }, 500)
    }
    componentWillUnmount() {
       clearInterval(this.interval)
    }
```

已知：`react-native: 0.45 已废弃(TimerMixin)`

参考：[react-native-0.45-timers](http://reactnative.cn/docs/0.45/timers.html)

结论(测试中):
```
componentWillUnmount() {
      this.interval&& clearInterval(this.interval)
    }
```

#### download
[notes.apk](notes.apk)