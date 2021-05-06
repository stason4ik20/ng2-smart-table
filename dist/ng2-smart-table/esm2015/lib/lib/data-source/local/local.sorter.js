export function compareValues(direction, a, b) {
    if (a < b) {
        return -1 * direction;
    }
    if (a > b) {
        return direction;
    }
    return 0;
}
export class LocalSorter {
    static sort(data, field, direction, customCompare) {
        const dir = (direction === 'asc') ? 1 : -1;
        const compare = customCompare ? customCompare : compareValues;
        return data.sort((a, b) => {
            return compare.call(null, dir, a[field], b[field]);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuc29ydGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvV2Vic3Rvcm1Qcm9qZWN0cy9uZzItc21hcnQtdGFibGUvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9saWIvZGF0YS1zb3VyY2UvbG9jYWwvbG9jYWwuc29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxhQUFhLENBQUMsU0FBYyxFQUFFLENBQU0sRUFBRSxDQUFNO0lBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNULE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO0tBQ3ZCO0lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1QsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRCxNQUFNLE9BQU8sV0FBVztJQUV0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQWdCLEVBQUUsS0FBYSxFQUFFLFNBQWlCLEVBQUUsYUFBd0I7UUFFdEYsTUFBTSxHQUFHLEdBQVcsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxPQUFPLEdBQWEsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUV4RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVWYWx1ZXMoZGlyZWN0aW9uOiBhbnksIGE6IGFueSwgYjogYW55KSB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMSAqIGRpcmVjdGlvbjtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5leHBvcnQgY2xhc3MgTG9jYWxTb3J0ZXIge1xuXG4gIHN0YXRpYyBzb3J0KGRhdGE6IEFycmF5PGFueT4sIGZpZWxkOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nLCBjdXN0b21Db21wYXJlPzogRnVuY3Rpb24pOiBBcnJheTxhbnk+IHtcblxuICAgIGNvbnN0IGRpcjogbnVtYmVyID0gKGRpcmVjdGlvbiA9PT0gJ2FzYycpID8gMSA6IC0xO1xuICAgIGNvbnN0IGNvbXBhcmU6IEZ1bmN0aW9uID0gY3VzdG9tQ29tcGFyZSA/IGN1c3RvbUNvbXBhcmUgOiBjb21wYXJlVmFsdWVzO1xuXG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGNvbXBhcmUuY2FsbChudWxsLCBkaXIsIGFbZmllbGRdLCBiW2ZpZWxkXSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==