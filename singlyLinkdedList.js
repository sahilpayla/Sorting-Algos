// TRAVERSE in a singly linked list  ------------->

let curr = head;
while(curr != null){
    console.log(curr.data);
    curr = curr.next;
}

// INSERTION ------------------------------------------------>

// 1.insert at FIRST
function first(data){
    let sahil = new Node(data);
    sahil.next = head;
    head = sahil;
}

// 2. insert at MIDDLE
function middle(prevNode, data){
    let sahil1 = new Node(data);
    sahil1.next = prevNode.next;
    prevNode.next = sahil1;
}

// 3. insert at LAST
function last(data){
    let sahil2 = new Node(data);
    sahil2.next = null;
    let last = head;
    while(last.next != null){
        last = last.next
        last.next = sahil2;
    }
}

// DELETION ------------------------------------------------>

// FRONT
function front(data){
    head = head.next
}

// MIDDLE
function middle(data){
    prev.next = prev.next.next
}

// LAST
function last(data){
    let curr = head;
    while(curr.next.next != null){
        curr = curr.next;
        curr.next = null;
    }
}

// REVERSING ------------------------------------------------>

function reverse(data){
    let prev = null;       //p    
    let curr = head;        // c    n
    let next = null;        // 1 -> 2 -> 3 -> 4 ->

    while(curr != null){
        next = curr.next  // also can call temp 
        curr.next = prev;
        prev = curr;
        curr = next
    }
}