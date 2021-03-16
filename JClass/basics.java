import java.util.*;

public class Main{
	public static void main(String[] args){
		Target t = new Target();
		
		System.out.println(t);
	}
}
class Target{
	int id;
	List<Sub> sub;
	Target(){
		id=1;
		sub = new LinkedList<Sub>();
		sub.add(new Sub());		
	}
	public String toString(){
		return String.format("target= id: %d subtarget: %s",id,sub.toString());
	}
}

class Sub{
	int sub;
	Sub(){
		sub=14;
	}
	public String toString(){
		return String.format("sub=%d",sub);
	}
}
