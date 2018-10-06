class Vertex
  attr_accessor :in_edges, :out_edges, :value

  def initialize(value=nil)
    @value = value
    @in_edges = []
    @out_edges = []
  end
end
