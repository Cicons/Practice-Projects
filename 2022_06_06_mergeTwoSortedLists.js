/**
 * Code written for practice problem at:
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    let output = null;
    let i = output;
    
    // set up the first node
    if(!list1) { return list2 }
    else if (!list2) { return list1 }
    
    if (list1.val <= list2.val)
    {
        output = new ListNode(list1.val);
        i = output;
        list1 = list1.next;
    }
    else if (list1.val > list2.val)
    {
        output = new ListNode(list2.val);
        i = output;
        list2 = list2.next;
    }
    
    // while there's stuff in list 1 and 2
    while (list1 && list2) {
        if (list2.val > list1.val) {
            // merge list1's value into the placeholder, shift lists
            i.next = new ListNode(list1.val);
            i = i.next;
            
            list1 = list1.next;
        }
        else if (list2.val < list1.val) {
            // merge list2's value into the placeholder, shift lists
            i.next = new ListNode(list2.val);
            i = i.next;
            
            list2 = list2.next;
        }
        else if (list1.val === list2.val) {
            // merge list1's and list2's values into the placeholder, shift lists
            i.next = new ListNode(list1.val);
            i = i.next;
            
            i.next = new ListNode(list2.val);
            i = i.next;
            
            list1 = list1.next;
            list2 = list2.next;
        }
    }
    
    while (list1) {
        // merge the rest of list1 into the placeholder
        i.next = new ListNode(list1.val);
        i = i.next;
        
        list1 = list1.next;
    }
    
    while (list2) {
        // merge the rest of list2 into the placeholder
        i.next = new ListNode(list2.val);
        i = i.next;
        
        list2 = list2.next;
    }
    
    
        
    return output;
};
