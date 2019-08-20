// classe base (o componente)
public abstract class ElementoDoQuestionario
{
    protected string Descricao;
 
    protected ElementoDoQuestionario(string descricao)
    {
        Descricao = descricao;
    }
    public abstract void Exibir();
}
 
// bloco (o composto)
public class Bloco : ElementoDoQuestionario
{
    private IList<ElementoDoQuestionario> _elementos = new List<ElementoDoQuestionario>();
    public IEnumerable<ElementoDoQuestionario> Elementos { get { return _elementos; } }
 
    public Bloco(string descricao) : base(descricao) { }
 
    public override void Exibir()
    {
        Console.WriteLine("Bloco: {0}", Descricao);
        foreach (var elemento in _elementos)
            elemento.Exibir();
    }
 
    public void Adicionar(ElementoDoQuestionario elemento)
    {
        _elementos.Add(elemento);
    }
 
    public void Remover(ElementoDoQuestionario elemento)
    {
        _elementos.Remove(elemento);
    }
}
 
// questão (a folha)
public class Questao : ElementoDoQuestionario
{
    public Questao(string descricao) : base(descricao) { }
 
    public override void Exibir()
    {
        Console.WriteLine("Questão: {0}", Descricao);
    }
}